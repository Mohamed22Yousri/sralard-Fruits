const Adress = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>العنوان</h1>
      <hr style={{ width: "20%", margin: "auto", marginTop: "20px" }} />
      <h3 style={{ textAlign: "center", direction: "rtl" }}>
        شارع ترسا الرئيسي، 40 برج الصفوه محطة سهل حمزة، (الجيزة)
      </h3>
      <div style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3455.659425319137!2d31.161158784886254!3d29.98921628190238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU5JzIxLjIiTiAzMcKwMDknMzIuMyJF!5e0!3m2!1sar!2seg!4v1784027041726!5m2!1sar!2seg"
    width="100%"
    height="450"
    style={{ border: 0, maxWidth: "900px", borderRadius: "12px" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    title="Location"
  ></iframe>
</div>
    </div>
  );
};

export default Adress;
