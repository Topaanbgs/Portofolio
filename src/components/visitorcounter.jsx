import { useEffect, useState } from "react";
import { supabase } from "../supabaseclient";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const incrementVisitor = async () => {
      try {
        let { data, error } = await supabase.from("counters").select("*").eq("id", 1).maybeSingle();

        if (error) throw error;

        if (!data) {
          const { data: newData, error: insertError } = await supabase
            .from("counters")
            .insert([{ id: 1, value: 1 }])
            .select()
            .maybeSingle();
          if (insertError) throw insertError;
          setCount(newData.value);
        } else {
          const { data: updatedData, error: updateError } = await supabase
            .from("counters")
            .update({ value: data.value + 1 })
            .eq("id", 1)
            .select()
            .maybeSingle();

          if (updateError) throw updateError;
          setCount(updatedData.value);
        }
      } catch (err) {
        console.error("VisitorCounter error:", err);
        setCount(null);
      } finally {
        setLoading(false);
      }
    };

    incrementVisitor();
  }, []);

  return <div className="text-center mt-6 text-white md:text-xl">{loading ? <p>Loading visitors...</p> : count !== null ? <p>{count} Visitors Since Launch 🚀</p> : <p>⚠️ Failed to load visitor count</p>}</div>;
}
