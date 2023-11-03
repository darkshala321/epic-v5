import React, { Component } from 'react';
import './checkout.css';
import { FireFilled, SettingFilled, CreditCardOutlined, MailOutlined } from '@ant-design/icons';
import { Input, DatePicker, Button, Flex } from 'antd';
import { BsPaypal } from 'react-icons/bs'

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ppaymentMethod: 'credit-card',
            tosAccepted: false,
            paymentOption: null,
            expiration: null,
            paypalEmail: '',
            isValidEmail: true,
        };
    }

    handlePaypalEmailChange = (e) => {
        const email = e.target.value;
        // Sử dụng biểu thức chính quy để kiểm tra định dạng email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValidEmail = emailRegex.test(email);

        this.setState({
            paypalEmail: email,
            isValidEmail: isValidEmail,
        });
    }

    handlePaymentOptionChange = (option) => {
        this.setState({ paymentOption: option });
    }

    handlePaymentMethodChange = (method) => {
        this.setState({ paymentMethod: method });
    }

    handleTosCheckboxChange = () => {
        this.setState({ tosAccepted: !this.state.tosAccepted });
    }

    handleExpirationChange = (date, dateString) => {
        this.setState({ expiration: dateString });
    }

    render() {
        const { paymentMethod, tosAccepted } = this.state;
        const { paypalEmail, isValidEmail } = this.state;

        return (
            <div className="checkout-container">
                <div className="checkout-column">
                    <div className='h1-checkout'>
                        <h1>Checkout</h1>
                        <p>Username: {this.props.username}</p>
                    </div>
                    <div className={`payment-tab-credit ${paymentMethod === 'credit-card' ? 'active' : ''}`} onClick={() => this.handlePaymentMethodChange('credit-card')}>

                        <label>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="credit-card"
                                checked={paymentMethod === 'credit-card'}
                                onChange={() => this.handlePaymentMethodChange('credit-card')}
                            />
                            Credit Card
                        </label>
                        <CreditCardOutlined
                            style={{
                                color: paymentMethod === 'credit-card' ? 'blue' : 'gray',
                                gap: '5px',
                            }}
                        />
                    </div>
                    {paymentMethod === 'credit-card' && (
                        <div className="payment-form">
                            <div className='card-number'>
                                <div className='card-detail-des' style={{ paddingBottom: '5px', fontWeight: 'bold' }}>
                                    CARD DETAIL
                                </div>
                                <Input
                                    size="large"
                                    placeholder="Card Number"
                                    suffix={<FireFilled style={{ fontSize: '8px', color: 'red' }} />}
                                    onChange={(e) => {
                                        // Lọc bỏ các ký tự không phải số
                                        const cardNumber = e.target.value.replace(/\D/g, '');

                                        // Tạo khoảng trắng sau mỗi 4 số
                                        const formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
                                        // Giới hạn số ký tự
                                        if (formattedCardNumber.length <= 19) {
                                            this.setState({ cardNumber: formattedCardNumber });
                                        }
                                    }}
                                    value={this.state.cardNumber}
                                />
                            </div>
                            <div className='exp'>
                                <DatePicker
                                    size="large"
                                    placeholder="Expiration"
                                    format="MM/YY"
                                    onChange={this.handleExpirationChange}
                                    suffixIcon={<FireFilled style={{ fontSize: '8px', color: 'red' }} />}
                                />
                                <Input
                                    size="large"
                                    placeholder="CVV"
                                    type="password"
                                    suffix={<FireFilled style={{ fontSize: '8px', color: 'red' }} />}
                                    onChange={(e) => {
                                        // Lọc bỏ các ký tự không phải số
                                        const cvv = e.target.value.replace(/\D/g, '');

                                        // Giới hạn số ký tự
                                        if (cvv.length <= 5) {
                                            this.setState({ cvv });
                                        }
                                    }}
                                    value={this.state.cvv}
                                />
                            </div>
                            <fieldset>
                                <legend>
                                    <span>
                                        <SettingFilled style={{ fontSize: '8px', color: 'red' }} />
                                    </span>
                                    <span style={{ lineHeight: '1.2' }}> <span style={{ fontWeight: 'bold' }}>Required:</span> Save this payment method for future purchases?</span>
                                </legend>
                                <div className='yes-no'>
                                    <div className='yes'>
                                        <input
                                            type="radio"
                                            id="yesOption"
                                            name="paymentOption"
                                            value="yes"
                                            checked={this.state.paymentOption === 'yes'}
                                            onChange={() => this.handlePaymentOptionChange('yes')}
                                        />
                                        <label htmlFor="yesOption">Yes</label>
                                    </div>
                                    <div className='no'>
                                        <input
                                            type="radio"
                                            id="noOption"
                                            name="paymentOption"
                                            value="no"
                                            checked={this.state.paymentOption === 'no'}
                                            onChange={() => this.handlePaymentOptionChange('no')}
                                        />
                                        <label htmlFor="noOption">No</label>
                                    </div>
                                </div>
                                <div className="payment-note">
                                    <span>
                                        By choosing to save your payment information,
                                        this payment method will be selected as the default for
                                        all purchases made using Epic Games payment, including purchases
                                        in Fortnite, Rocket League, Fall Guys and the Epic Games Store.
                                        You can delete your saved payment information anytime on this payment screen or by
                                        logging in to your Epic Games account, and selecting payment management
                                        in your account settings.
                                        <a href="https://www.epicgames.com/help/billing-support-c5719364845851/general-support-c5719348744091/how-do-i-delete-my-payment-method-from-my-epic-games-account-a5720332186523" target="_blank">
                                            <span style={{ fontWeight: 'bold' }}>Learn more</span>
                                        </a>.
                                    </span>
                                </div>
                            </fieldset>
                        </div>
                    )}
                    <div className={`payment-tab-paypal ${paymentMethod === 'paypal' ? 'active' : ''}`} onClick={() => this.handlePaymentMethodChange('paypal')}>

                        <label>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="paypal"
                                checked={paymentMethod === 'paypal'}
                                onChange={() => this.handlePaymentMethodChange('paypal')}
                            />
                            Paypal
                        </label>
                        <BsPaypal style={{
                            color: paymentMethod === 'paypal' ? 'blue' : 'gray',
                            gap: '5px',
                        }} />

                        <label htmlFor="paypalOption"></label>

                    </div>
                    {paymentMethod === 'paypal' && (
                        <div className="payment-form">
                            <p style={{ color: 'black' }}>Please provide your Paypal email:</p>
                            <div>
                                <Input
                                    size="large"
                                    placeholder="Your Paypal email"
                                    prefix={<MailOutlined style={{ fontSize: '15px', color: '' }} />}
                                    value={paypalEmail}
                                    onChange={this.handlePaypalEmailChange}
                                    className={isValidEmail ? '' : 'invalid-email'} // Thêm lớp CSS nếu email không hợp lệ
                                />
                                {!isValidEmail && (
                                    <p className="error-message" style={{ color: 'red' }}>Please enter a valid email address.</p>
                                )}
                            </div>
                            <fieldset>
                                <legend>
                                    <span>
                                        <SettingFilled style={{ fontSize: '8px', color: 'red' }} />
                                    </span>
                                    <span style={{ lineHeight: '1.2' }}> <span style={{ fontWeight: 'bold' }}>Required:</span> Save this payment method for future purchases?</span>
                                </legend>
                                <div className='yes-no'>
                                    <div className='yes'>
                                        <input
                                            type="radio"
                                            id="yesOption"
                                            name="paymentOption"
                                            value="yes"
                                            checked={this.state.paymentOption === 'yes'}
                                            onChange={() => this.handlePaymentOptionChange('yes')}
                                        />
                                        <label htmlFor="yesOption">Yes</label>
                                    </div>
                                    <div className='no'>
                                        <input
                                            type="radio"
                                            id="noOption"
                                            name="paymentOption"
                                            value="no"
                                            checked={this.state.paymentOption === 'no'}
                                            onChange={() => this.handlePaymentOptionChange('no')}
                                        />
                                        <label htmlFor="noOption">No</label>
                                    </div>
                                </div>
                                <div className="payment-note">
                                    <span>
                                        By choosing to save your payment information,
                                        this payment method will be selected as the default for
                                        all purchases made using Epic Games payment, including purchases
                                        in Fortnite, Rocket League, Fall Guys and the Epic Games Store.
                                        You can delete your saved payment information anytime on this payment screen or by
                                        logging in to your Epic Games account, and selecting payment management
                                        in your account settings.
                                        <a href="https://www.epicgames.com/help/billing-support-c5719364845851/general-support-c5719348744091/how-do-i-delete-my-payment-method-from-my-epic-games-account-a5720332186523" target="_blank">
                                            <span style={{ fontWeight: 'bold' }}>Learn more</span>
                                        </a>.
                                        <br />
                                        <br />
                                        <span className="">You will be directed to
                                            PayPal to authorize your payment method,
                                            then you will be returned to Epic Games to complete this
                                            purchase.
                                        </span>
                                    </span>
                                </div>
                            </fieldset>
                        </div>
                    )}

                </div>
                <div className="game-info-checkout">

                    <h1 className="payment-title"><span>Order Summary</span></h1>
                    <div className='game-image'>
                        <img alt="The Lord of The Rings Return to Moria" src="https://cdn1.epicgames.com/spt-assets/2ae760629a384d5199cbefc612db7ac8/the-lord-of-the-rings-return-to-moria-tr0c9.png" />
                    </div>

                    <div className="payment-price-checkout">
                        <p>
                            <span>Price</span>
                        </p>
                        <p>
                            <span>₱999.99</span>
                        </p>
                    </div>
                    <div className="tos">
                        <label>
                            <input type="checkbox" onChange={this.handleTosCheckboxChange} checked={tosAccepted} />
                            <span>Click here to agree to share your email with <strong>North Beach Games</strong>. <strong>North Beach Games</strong> will use your email address for marketing and otherwise in accordance
                                with its <a style={{ color: 'blue', fontWeight: 'bold' }} target="_blank" href="https://www.returntomoria.com/privacy/">privacy policy</a>,
                                so we encourage you to read it.</span>
                        </label>
                    </div>
                    <div className='tos-button'>
                        {tosAccepted && (
                            <Flex vertical gap="small" style={{ width: '100%' }}>
                                <Button type="primary" block>PLACE ORDER</Button>
                            </Flex>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;