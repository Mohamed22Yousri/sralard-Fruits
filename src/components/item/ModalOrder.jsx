import React from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../supabase";

const ModalOrder = ({ show, onClose, cartItems }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (!show) return null;

  const onSubmit = async (data) => {
    try {
      const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      const { error } = await supabase.from("orders").insert([
        {
          name: data.name,
          phone: data.phone,
          address: data.address,
          products: cartItems,
          total_price: totalPrice,
        },
      ]);

      if (error) {
        console.log("Supabase Error:", error);
        alert("حدث خطأ أثناء إرسال الطلب");
        return;
      }

      alert("تم إرسال الطلب بنجاح");
      reset();
      onClose();
    } catch (error) {
      console.log("Error:", error);
      alert("حدث خطأ في الاتصال");
    }
  };

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">إتمام الطلب</h5>

              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">الاسم</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="اكتب اسمك"
                    {...register("name", {
                      required: "الاسم مطلوب",
                    })}
                  />

                  <small className="text-danger">
                    {errors.name?.message}
                  </small>
                </div>

                <div className="mb-3">
                  <label className="form-label">رقم الهاتف</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="01xxxxxxxxx"
                    {...register("phone", {
                      required: "رقم الهاتف مطلوب",
                    })}
                  />

                  <small className="text-danger">
                    {errors.phone?.message}
                  </small>
                </div>

                <div className="mb-3">
                  <label className="form-label">العنوان</label>

                  <textarea
                    rows="3"
                    className="form-control"
                    placeholder="اكتب العنوان"
                    {...register("address", {
                      required: "العنوان مطلوب",
                    })}
                  ></textarea>

                  <small className="text-danger">
                    {errors.address?.message}
                  </small>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={onClose}
                >
                  إلغاء
                </button>

                <button
                  type="submit"
                  className="btn btn-success"
                >
                  تأكيد الطلب
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default ModalOrder;