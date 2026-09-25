import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cpoavtjwduqfxfopfern.supabase.co";
const supabaseKey = "sb_publishable_XIQM65DDCeAwXoHJx_2Rmg_bJCOofdV";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);