import{d as B,r as a,g as U,c as m,a as o,b as u,w as d,v as i,t as V,e as M,f as I,u as S,s as b,o as c,_ as k}from"./index-D7j6BBib.js";const q={key:0},C=B({__name:"UpdateBlog",props:{blogId:{type:String,required:!0}},setup(f){const p=f,s=a(""),r=a(""),n=a(""),g=a(!1),v=a(""),y=S(),w=async()=>{try{const{error:t}=await b.from("blogs").update({title:s.value,content:r.value,author:n.value}).eq("id",p.blogId);if(t)throw t;g.value=!0,v.value="Blog updated successfully!",y.push("/")}catch(t){console.error("Error updating blog:",t.message)}},x=async()=>{try{const{data:t,error:e}=await b.from("blogs").select("*").eq("id",p.blogId).single();if(e)throw e;t&&(s.value=t.title,r.value=t.content,n.value=t.author)}catch(t){console.error("Error fetching blog:",t.message)}};return U(async()=>{await x()}),(t,e)=>(c(),m("div",null,[e[7]||(e[7]=o("h2",null,"Update Blog",-1)),o("form",{onSubmit:I(w,["prevent"])},[o("label",null,[e[3]||(e[3]=u(" Title ")),d(o("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l)},null,512),[[i,s.value]])]),o("label",null,[e[4]||(e[4]=u(" Content ")),d(o("textarea",{"onUpdate:modelValue":e[1]||(e[1]=l=>r.value=l)},null,512),[[i,r.value]])]),o("label",null,[e[5]||(e[5]=u(" Author ")),d(o("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=l=>n.value=l)},null,512),[[i,n.value]])]),e[6]||(e[6]=o("button",{type:"submit"},"Update blog",-1)),g.value?(c(),m("p",q,V(v.value),1)):M("",!0)],32)]))}}),E=k(C,[["__scopeId","data-v-9c43b68e"]]);export{E as default};
