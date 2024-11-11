import {
  a as m,
  j as s,
  r as c,
  c as h,
  L as j,
  P as v,
} from "./index-D5VDQnbM.js";
const {
    Axios: G,
    AxiosError: N,
    CanceledError: K,
    isCancel: Q,
    CancelToken: U,
    VERSION: W,
    all: Y,
    Cancel: Z,
    isAxiosError: ss,
    spread: es,
    toFormData: ts,
    AxiosHeaders: is,
    HttpStatusCode: as,
    formToJSON: ns,
    getAdapter: cs,
    mergeConfig: rs,
  } = m,
  k = "_title_tximj_1",
  E = { title: k };
function S({ children: i }) {
  return s.jsxs("h1", { className: E.title, children: [" ", i] });
}
const C = "_input_14q7n_1",
  y = "_noactive_14q7n_17",
  b = "_active_14q7n_25",
  d = { input: C, noactive: y, active: b };
function $({ value: i, onChange: e, isActive: n }) {
  return (
    c.useEffect(() => {}, [n]),
    s.jsx("input", {
      className: h(d.input, { [d.active]: n, [d.noactive]: !n }),
      type: "text",
      placeholder: "Введите блюдо или состав",
      value: i,
      onChange: e,
    })
  );
}
const w = "_header_sivti_1",
  A = { header: w },
  L = "_link_1ifi7_1",
  P = "_card_1ifi7_13",
  q = "_img_1ifi7_31",
  F = "_text_1ifi7_45",
  I = "_name_1ifi7_55",
  M = "_price_1ifi7_65",
  R = "_icon_1ifi7_95",
  T = "_basket_1ifi7_103",
  H = "_rating_1ifi7_129",
  O = "_star_1ifi7_163",
  V = "_description_1ifi7_171",
  t = {
    link: L,
    card: P,
    img: q,
    text: F,
    name: I,
    price: M,
    icon: R,
    basket: T,
    rating: H,
    star: O,
    description: V,
  };
function D({ id: i, price: e, rating: n, name: r, img: o, description: l }) {
  return s.jsx(j, {
    to: `/product/${i}`,
    className: t.link,
    children: s.jsxs("div", {
      className: t.card,
      id: "id",
      children: [
        s.jsxs("div", {
          className: t.price,
          children: [e, s.jsx("span", { className: t.icon, children: "₽" })],
        }),
        s.jsx("button", {
          className: t.basket,
          children: s.jsx("img", { src: "/basket.svg", alt: "basket" }),
        }),
        s.jsx("img", { className: t.img, src: o, alt: "dish" }),
        s.jsxs("div", {
          className: t.rating,
          children: [
            n,
            s.jsx("img", { src: "/Star.svg", className: t.star, alt: "star" }),
          ],
        }),
        s.jsxs("div", {
          className: t.text,
          children: [
            s.jsx("div", { className: t.name, children: r }),
            s.jsx("div", { className: t.description, children: l }),
          ],
        }),
      ],
    }),
  });
}
const J = "_wrapper_1sgvn_1",
  X = { wrapper: J };
function z({ products: i }) {
  return s.jsxs("div", {
    className: X.wrapper,
    children: [
      i.map((e) =>
        s.jsx(
          D,
          {
            id: e.id,
            price: e.price,
            rating: e.rating,
            name: e.name,
            img: e.image,
            description: e.ingredients.join(", "),
          },
          e.id
        )
      ),
      ";",
    ],
  });
}
function os() {
  const [i, e] = c.useState([]),
    [n, r] = c.useState(!1),
    [o, l] = c.useState(),
    x = async () => {
      try {
        r(!0);
        const { data: a } = await m.get(`${v}/products`);
        e(a), r(!1);
      } catch (a) {
        console.error(a), a instanceof N && l(a.message), r(!1);
        return;
      }
    };
  c.useEffect(() => {
    x();
  }, []),
    console.log(i);
  const [g, f] = c.useState(""),
    [_, u] = c.useState(!1),
    p = (a) => {
      f(a.target.value),
        a.target.value.length > 0 && u(!0),
        a.target.value.length === 0 && u(!1),
        console.log(_);
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsxs("div", {
        className: A.header,
        children: [
          s.jsx(S, { children: "Меню" }),
          s.jsx($, { value: g, onChange: p, isActive: _ }),
        ],
      }),
      o && s.jsx("div", { children: o }),
      !n && s.jsx(z, { products: i }),
      n && s.jsx("div", { children: "Загружаем продукт" }),
    ],
  });
}
export { os as default };
