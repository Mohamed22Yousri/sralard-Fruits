import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yyezlegvlqqohhcbcczq.supabase.co";
const supabaseKey = "sb_publishable_EZXE2yldCH9cYuaxzn7POw_LUIChVuO";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);