exports.id = 8117;
exports.ids = [8117];
exports.modules = {

/***/ 1604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_HOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8117);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HOC_ProductsHOC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4143);





class ErrorPage extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    componentDidMount() {
        this.loop(this);
    }
    loop(comp) {
        comp.state.timeToRoute - 1 >= 0 && comp.setState({
            timeToRoute: comp.state.timeToRoute - 1
        }, ()=>{
            setTimeout(()=>{
                this.loop(this);
            }, 1000);
        });
        comp.state.timeToRoute === 0 && window.location.replace("/");
    }
    render() {
        const { timeToRoute  } = this.state;
        const styles = {
            Allert: {
                textAlign: "center",
                fontWeight: "bold"
            },
            Time: {
                color: "red",
                fontSize: "1.45rem",
                verticalAlign: "middle"
            }
        };
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: styles.Allert,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: "incorrect address!"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        "you will be taken to the home page for... ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            style: styles.Time,
                            children: timeToRoute
                        })
                    ]
                })
            ]
        });
    }
    constructor(...args){
        super(...args);
        this.state = {
            timeToRoute: 4
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_HOC_ProductsHOC__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_HOC_HOC__WEBPACK_IMPORTED_MODULE_2__["default"])(ErrorPage)));


/***/ }),

/***/ 8117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HOC": () => (/* binding */ HOC),
/* harmony export */   "Store": () => (/* binding */ Store),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9160);



const Store = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
const HOC = (ToWrap)=>{
    return class WrappedWithMenu extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
        componentDidMount() {
            if (localStorage.getItem("cart")) {
                const downloaded = JSON.parse(localStorage.getItem("cart"));
                this.setState({
                    cart: downloaded
                });
            }
        }
        render() {
            const { order , search , searchValue , cart  } = this.state;
            const { profile , logged  } = this.props;
            const { products  } = this.props ?? [];
            const changeState = (newState)=>this.setState(newState);
            const searchItem = (e)=>{
                const { target  } = e;
                const { value  } = target;
                this.setState(value !== "" ? {
                    search: products?.filter(({ name  })=>name.toLowerCase().includes(value.toLowerCase()))
                } : {
                    search: []
                }, this.setState({
                    searchValue: e.target.value
                }));
            };
            const saveToLocalStorage = (e, newObjectInCart)=>{
                e.preventDefault();
                const copy = [
                    ...cart
                ];
                copy.push(newObjectInCart);
                this.setState({
                    cart: copy
                }, localStorage.setItem("cart", JSON.stringify(copy)));
            };
            const sex = this.props.sex ? this.props.sex : this.state.sex;
            const type = this.props.type ? this.props.type : this.state.type;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Store.Provider, {
                value: {
                    products,
                    order,
                    sex,
                    type,
                    search,
                    cart,
                    profile,
                    logged,
                    changeState,
                    saveToLocalStorage
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        searchItem: searchItem,
                        searchValue: searchValue
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ToWrap, {
                        profile: profile,
                        ...this.props
                    })
                ]
            });
        }
        constructor(...args){
            super(...args);
            this.state = {
                order: "cheapest",
                sex: this.props.sex ? this.props.sex : "all",
                type: this.props.type ? this.props.type : "all",
                search: [],
                searchValue: "",
                cart: []
            };
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HOC);


/***/ }),

/***/ 4143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ProductsHOC = (ToWrap)=>{
    return class HOC extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
        componentDidMount() {
            fetch(`${"http://localhost:3000/api/"}product/all`).then((res)=>res.json()).then(({ resp  })=>this.setState({
                    products: resp
                }, console.log(this.state.products)));
        }
        render() {
            const { products  } = this.state;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ToWrap, {
                products: products,
                ...this.props
            });
        }
        constructor(...args){
            super(...args);
            this.state = {
                products: []
            };
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsHOC);


/***/ }),

/***/ 2434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7865);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_cg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HOC_HOC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8117);
/* harmony import */ var _MenuBTN__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9196);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6004);







class Icons extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const styles = {
            icon: {
                fontSize: _app__WEBPACK_IMPORTED_MODULE_6__.glbl._height
            },
            profile: {
                height: _app__WEBPACK_IMPORTED_MODULE_6__.glbl._height
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HOC_HOC__WEBPACK_IMPORTED_MODULE_4__.Store.Consumer, {
            children: (value)=>{
                const { cart , profile , logged  } = value ?? {};
                const { img  } = profile ?? {};
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuBTN__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineHome, {
                                style: styles.icon
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuBTN__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            href: "/profile",
                            children: logged ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                style: {
                                    ...styles.icon,
                                    ...styles.profile
                                },
                                src: img,
                                alt: "profile icon"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_3__.CgProfile, {
                                style: styles.icon
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuBTN__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            number: cart?.length,
                            href: "/cart",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineShoppingCart, {
                                style: styles.icon
                            })
                        })
                    ]
                });
            }
        });
    }
}


/***/ }),

/***/ 9160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchingList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2018);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2434);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6004);





class Menu extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const { searchItem , searchValue  } = this.props;
        const styles = {
            Menu: {
                width: "fit-content",
                width: _app__WEBPACK_IMPORTED_MODULE_4__.glbl._width,
                position: "fixed",
                justifyContent: "space-between",
                top: "3%",
                right: "3%",
                display: "flex",
                zIndex: "1410"
            },
            input: {
                zIndex: "1410",
                border: "solid black 2px",
                borderRadius: "7px",
                transition: "all 0.125s ease-in-out"
            }
        };
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "Menu",
            style: styles.Menu,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: "search",
                    style: styles.input,
                    type: "text",
                    placeholder: "search",
                    onChange: searchItem,
                    value: searchValue
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchingList__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons__WEBPACK_IMPORTED_MODULE_3__["default"], {})
            ]
        });
    }
}


/***/ }),

/***/ 9196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuBTN)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HOC_HOC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8117);




class MenuBTN extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const { number , children , href  } = this.props;
        const styles = {
            a: {
                cursor: "pointer",
                color: "yellow",
                fontWeight: "bold",
                border: "solid black 1px",
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                position: "absolute",
                display: number > 0 ? "grid" : "none",
                justifyItems: "center",
                alignItems: "center",
                top: "-5px",
                right: "-5px",
                background: "red",
                transition: "all 0.125s ease-in-out"
            },
            relative: {
                position: "relative",
                textDecoration: "none",
                color: "black"
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HOC_HOC__WEBPACK_IMPORTED_MODULE_3__.Store.Consumer, {
            children: (value)=>{
                const { changeState  } = value ?? {};
                const resetFilters = ()=>changeState({
                        sex: "all",
                        type: "all"
                    });
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `${href}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: styles.relative,
                        className: "MenuBTN",
                        onClick: resetFilters,
                        children: [
                            children,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: styles.a,
                                children: number
                            })
                        ]
                    })
                });
            }
        });
    }
}


/***/ }),

/***/ 2018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchingList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_HOC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8117);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6004);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SmallComponents_ImgFrame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7069);
/* harmony import */ var _Modal_Background__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7505);







class SearchingList extends react__WEBPACK_IMPORTED_MODULE_4__.Component {
    render() {
        const styles = {
            miniature: {
                height: "40px"
            },
            frame: {
                height: "40px",
                width: "60px",
                overflow: "hidden",
                display: "grid",
                justifyItems: "center",
                alignItems: "center"
            },
            ul: {
                position: "fixed",
                transform: `translateY(calc(${_app__WEBPACK_IMPORTED_MODULE_3__.glbl._height} + 3px))`,
                width: _app__WEBPACK_IMPORTED_MODULE_3__.glbl._width,
                zIndex: "1410"
            },
            li: {
                display: "flex",
                alignItems: "center",
                margin: "2px 0px",
                backgroundColor: "#e3e3e3",
                background: "linear-gradient(275deg,#e3e3e3 0%,#ffffff 29%)",
                boxShadow: "2px 2px gray",
                transition: "all 0.125s ease-in-out",
                borderRadius: "5px",
                overflow: "hidden",
                paddingLeft: "5px"
            },
            link: {
                textDecoration: "none",
                color: "black"
            },
            shadowNone: {
                boxShadow: "none",
                border: "solid black 1px",
                borderRadius: "5px"
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HOC_HOC__WEBPACK_IMPORTED_MODULE_1__.Store.Consumer, {
            children: (value)=>{
                const { search , changeState  } = value ?? {};
                const sliced = search?.slice(0, 5) || search;
                const closeList = ()=>changeState({
                        searchValue: "",
                        search: []
                    });
                const clickBground = (e)=>{
                    if (e.target.id === "Background") closeList();
                };
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            style: styles.ul,
                            children: sliced?.map(({ name , id , image  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/products/${id}`,
                                    style: styles.link,
                                    onClick: closeList,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        style: styles.li,
                                        className: "searchingElement",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_ImgFrame__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                src: image,
                                                shadow: styles.shadowNone,
                                                alt: `image of ${name}`,
                                                x: "60px",
                                                y: "40px"
                                            }),
                                            " ",
                                            name
                                        ]
                                    })
                                }, name))
                        }),
                        search?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_Background__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            bgc: "transparent",
                            zidx: "1300",
                            onMouseDown: clickBground
                        })
                    ]
                });
            }
        });
    }
}


/***/ }),

/***/ 7505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Background)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Background extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const { children , bgc , zidx  } = this.props;
        const styles = {
            Bground: {
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                position: "fixed",
                top: "0%",
                left: "0%",
                background: bgc,
                width: "100vw",
                height: "100vh",
                zIndex: "2000",
                zIndex: zidx
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "Background",
            style: styles.Bground,
            ...this.props,
            children: children
        });
    }
}


/***/ }),

/***/ 6004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App),
/* harmony export */   "glbl": () => (/* binding */ glbl),
/* harmony export */   "sort": () => (/* binding */ sort)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1604);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_scroll_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7485);
/* harmony import */ var _styles_scroll_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scroll_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_hoverEffects_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8943);
/* harmony import */ var _styles_hoverEffects_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_hoverEffects_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_spin_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5038);
/* harmony import */ var _styles_spin_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_spin_css__WEBPACK_IMPORTED_MODULE_6__);







const glbl = {
    _height: "30px",
    _width: "250px",
    _img_height: "200px",
    _field_height: "120px",
    _green_color: "#5fff33",
    _gradient: "linear-gradient(0deg,#5fff33 10%,#36c20f 31%,#36c20f 50%)",
    _yellow_color: "#fff625"
};
const sort = {
    price: {
        asc: function(products) {
            return products?.sort((a, b)=>a.price - b.price);
        },
        dsc: function(products) {
            return products?.sort((a, b)=>b.price - a.price);
        }
    },
    name: {
        dsc: function(products) {
            return products?.sort((a, b)=>{
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA > nameB) return -1;
                if (nameA < nameB) return 1;
                return 0;
            });
        },
        asc: function(products) {
            return products?.sort(function(a, b) {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
        }
    },
    quantity: {
        asc: function(products) {
            return products?.sort((a, b)=>a.quantity - b.quantity);
        },
        dsc: function(products) {
            return products?.sort((a, b)=>b.quantity - a.quantity);
        }
    },
    types: {
        sex: function(products, sex) {
            return products?.filter((x)=>x.sex.toLowerCase() === sex);
        },
        type: function(products, type) {
            return products?.filter((x)=>x.category === type);
        }
    }
};
class App extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    static async getInitialProps(ctx) {
        const legalPaths = [
            "/",
            "/profile",
            "/history/[order]",
            "/products/[boot]",
            "/cart"
        ];
        const { pathname  } = ctx?.router;
        const legal = legalPaths.includes(pathname);
        return {
            legal
        };
    }
    render() {
        const { legal , Component , pageProps  } = this.props;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        });
    }
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 8943:
/***/ (() => {



/***/ }),

/***/ 7485:
/***/ (() => {



/***/ }),

/***/ 5038:
/***/ (() => {



/***/ })

};
;