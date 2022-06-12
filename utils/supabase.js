import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://alhyfjsgghatgfbnsbtw.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
export default supabase = createClient(supabaseUrl, supabaseKey);
