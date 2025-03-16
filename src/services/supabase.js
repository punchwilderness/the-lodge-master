/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "Supabase URL";

const supabase = createClient(supabaseUrl, "API KEY");

export default supabase;
