import { Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { user_login } from "../../Configuration/Setting";

const PaymentPage = (props) => {
    let { cartList } = props;

    let showProductSubTotal = (products) => {
        let total = 0;
        if (products.length > 0) {
            let result = products.map((product) => {
                return parseFloat(product.product.price) * product?.quantity;
            });
            for (const iterator of result) {
                total += iterator;
            }
        }
        return total;
    };

    let renderProductItem = (products) => {
        let result;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <tr key={index} className="cart-item">
                        <td>
                            {product?.product.product_name}
                            <strong className="product-quantity">
                                × {product?.quantity}
                            </strong>
                        </td>
                        <td>
                            <span className="amount">
                                {parseFloat(product?.product.price) *
                                    product?.quantity}
                                <span>₫</span>
                            </span>
                        </td>
                    </tr>
                );
            });
        }

        return result;
    };

    let showFormCreateAccount = () => {
        let checkBox = document.getElementById("inputCreateAccount");
        let formCreateAccount = document.getElementById("form-create-account");
        if (checkBox.checked === true) {
            formCreateAccount.style.display = "block";
        } else {
            formCreateAccount.style.display = "none";
        }
    };

    let showFormLogin = () => {
        let formLogin = document.getElementById("form-login");
        {
            formLogin.style.display = "none"
                ? (formLogin.style.display = "block")
                : (formLogin.style.display = "none");
        }
    };

    let handleSubmit = (values) => {
        console.log(values);
    };

    let renderFormLogin = () => {
        return (
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={handleSubmit}
                render={(formikProps) => (
                    <Form id="form-login" className="form-login">
                        <p>
                            Nếu trước đây bạn đã mua hàng của chúng tôi, vui
                            lòng điền đầy đủ thông tin đăng nhập dưới đây. Nếu
                            bạn là khách hàng mới, vui lòng tiếp tục các bước
                            tiếp theo.
                        </p>
                        <div className="login-content">
                            <div className="row row--modifier">
                                <div className="col-6 col--modifier">
                                    <label htmlFor="username">
                                        Tên đăng nhập hoặc email <span>*</span>
                                    </label>
                                    <Field
                                        onChange={formikProps.handleChange}
                                        type="text"
                                        name="username"
                                        id="username"
                                    />
                                </div>
                                <div className="col-6 col--modifier ">
                                    <label htmlFor="password">
                                        Mật khẩu <span>*</span>
                                    </label>
                                    <Field
                                        onChange={formikProps.handleChange}
                                        type="password"
                                        name="password"
                                        id="password"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="form-row">
                            <button type="submit" className="btn-login">
                                Đăng nhập
                            </button>
                            <span className="input-remember-password">
                                <input
                                    type="checkbox"
                                    name="remember-password"
                                />
                                <span>Ghi nhớ mật khẩu</span>
                            </span>
                        </p>
                        <p className="forgot-password">
                            <NavLink exact to="/forgot-password">
                                Quên mật khẩu?
                            </NavLink>
                        </p>
                    </Form>
                )}
            />
        );
    };

    let renderPayment = () => {
        return (
            <section className="payment">
                <div className="payment__content">
                    <div className="form-login-toggle">
                        <p>
                            Bạn đã có tài khoản?
                            <button
                                id="button-login"
                                type="submit"
                                onClick={() => {
                                    showFormLogin();
                                }}
                            >
                                Ấn vào đây để đăng nhập
                            </button>
                        </p>
                        {renderFormLogin()}
                    </div>
                    <form className="form-payment">
                        <div className="row row--modifier ">
                            <div className="col-7 col--modifier ">
                                <div className="customer-detail">
                                    <div className="form-info-billing">
                                        <h3>Thông tin thanh toán</h3>
                                        <div className="customer-information">
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputFirstName">
                                                        Họ{" "}
                                                        <span className="required">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="inputFirstName"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputLastName">
                                                        Tên{" "}
                                                        <span className="required">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="inputLastName"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputAddress">
                                                    Địa chỉ{" "}
                                                    <span className="required">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputAddress"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputPhoneNumber">
                                                    Số điện thoại{" "}
                                                    <span className="required">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputPhoneNumber"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputEmail">
                                                    Địa chỉ email{" "}
                                                    <span className="required">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputEmail"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-info-account">
                                        <p className="create-account">
                                            <label htmlFor="inputCreateAccount">
                                                <input
                                                    onClick={() => {
                                                        showFormCreateAccount();
                                                    }}
                                                    type="checkbox"
                                                    name="inputCreateAccount"
                                                    id="inputCreateAccount"
                                                />
                                                <span>Tạo tài khoản mới?</span>
                                            </label>
                                        </p>
                                        <div
                                            id="form-create-account"
                                            className="form-create-account"
                                        >
                                            <div className="form-group">
                                                <label htmlFor="inputCreatePassword">
                                                    Tạo mật khẩu của tài khoản{" "}
                                                    <span className="required">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="inputCreatePassword"
                                                    placeholder="Mật khẩu"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 col--modifier ">
                                <div className="order-detail">
                                    <div className="order-detail__content">
                                        <h3 className="order-review-heading">
                                            Đơn hàng của bạn
                                        </h3>
                                        <div className="order-review">
                                            <table className="table-total">
                                                <thead>
                                                    <tr>
                                                        <th>Sản phẩm</th>
                                                        <th>Tổng</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {renderProductItem(
                                                        cartList
                                                    )}
                                                </tbody>
                                                <tfoot>
                                                    <tr className="cart-subtotal">
                                                        <th>Tổng phụ</th>
                                                        <td>
                                                            <span className="amount">
                                                                {showProductSubTotal(
                                                                    cartList
                                                                )}{" "}
                                                                <span>₫</span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr className="shipping">
                                                        <th>Giao hàng</th>
                                                        <td>
                                                            Giao hàng miễn phí
                                                        </td>
                                                    </tr>
                                                    <tr className="order-total">
                                                        <th>Tổng</th>
                                                        <td>
                                                            <span className="amount">
                                                                {showProductSubTotal(
                                                                    cartList
                                                                )}{" "}
                                                                <span>₫</span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                            <button className="btn-order">
                                                Đặt hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    };

    // if (!localStorage.getItem(user_login)) {
    //   alert("Vui lòng đăng nhập trước khi thanh toán!");
    //   return <Redirect to="/login" />;
    // }
    return renderPayment();
};

const mapStateToProps = (state) => {
    return {
        cartList: state.CartReducer,
    };
};

export default connect(mapStateToProps, null)(PaymentPage);
