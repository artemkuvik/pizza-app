import{r as i,j as s,c as j,u as v,L as f,R as k,a as N,T as y,b,P as E,A as S}from"./index-Cpddbj1J.js";const w="_input_ykpmn_1",L="_noactive_ykpmn_21",$="_active_ykpmn_29",m={input:w,noactive:L,active:$};function C({value:n,onChange:t,isActive:a}){return i.useEffect(()=>{},[a]),s.jsx("input",{className:j(m.input,{[m.active]:a,[m.noactive]:!a}),type:"text",placeholder:"Введите блюдо или состав",value:n,onChange:t})}const P="_header_9sr45_1",R={header:P},A="_link_snnru_1",F="_card_snnru_13",M="_img_snnru_31",D="_text_snnru_45",I="_name_snnru_55",T="_price_snnru_65",X="_icon_snnru_95",q="_basket_snnru_103",z="_rating_snnru_129",B="_star_snnru_163",G="_description_snnru_171",e={link:A,card:F,img:M,text:D,name:I,price:T,icon:X,basket:q,rating:z,star:B,description:G,"rating-position":"_rating-position_snnru_181"};function H({id:n,price:t,rating:a,name:r,img:d,description:u}){const c=v(),_=p=>{p.preventDefault(),c(N.add(n))};return s.jsx(f,{to:`/product/${n}`,className:e.link,children:s.jsxs("div",{className:e.card,id:"id",children:[s.jsxs("div",{className:e.price,children:[t,s.jsx("span",{className:e.icon,children:"₽"})]}),s.jsx("button",{className:e.basket,onClick:_,children:s.jsx("img",{src:"/basket.svg",alt:"basket"})}),s.jsx("img",{className:e.img,src:d,alt:"dish"}),s.jsx(k,{rating:a,className:e["rating-position"]}),s.jsxs("div",{className:e.text,children:[s.jsx("div",{className:e.name,children:r}),s.jsx("div",{className:e.description,children:u})]})]})})}const J="_wrapper_1sgvn_1",K={wrapper:J};function O({products:n}){return s.jsx("div",{className:K.wrapper,children:n.map(t=>s.jsx(H,{id:t.id,price:t.price,rating:t.rating,name:t.name,img:t.image,description:t.ingredients.join(", ")},t.id))})}function U(){const[n,t]=i.useState([]),[a,r]=i.useState(!1),[d,u]=i.useState(),[c,_]=i.useState(""),[p,g]=i.useState(!1),x=async o=>{try{r(!0);const{data:l}=await b.get(`${E}/products`,{params:{name:o}});t(l),r(!1)}catch(l){l instanceof S&&u(l.message),r(!1);return}};i.useEffect(()=>{x(c)},[c]);const h=o=>{_(o.target.value),o.target.value.length>0&&g(!0),o.target.value.length===0&&g(!1)};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:R.header,children:[s.jsx(y,{children:"Меню"}),s.jsx(C,{value:c,onChange:h,isActive:p})]}),d&&s.jsx("div",{children:d}),!a&&n.length>0&&s.jsx(O,{products:n}),a&&s.jsx("div",{children:"Загружаем продукт"}),!a&&n.length===0&&s.jsx("div",{children:"Не найдено блюд по запросу"})]})}export{U as default};