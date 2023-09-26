import './style.css'
import React from 'react';
import image from '../../images/PurpleHeart.png';

const ManageSubscription = () => {
    return (
        <div className='manageSubscription__root'>
            <div className='manageSubscription__header'>
                Manage Subscription
            </div>
            <div className='manageSubscription__content'>
                <div className='manageSubscription__currentSubscription'>
                    <div className='manageSubscription__topContent'>
                        <div className='manageSubscription__currentPlanText'>
                            Current Plan
                        </div>
                        <div className='manageSubscription__currentPlanData'>
                            Free
                        </div>
                    </div>
                    <div className='manageSubscription__topContent'>
                        <div className='manageSubscription__currentPlanText'>
                            Time Period
                        </div>
                        <div>
                            12/04/2023 - 12/04/2024
                        </div>
                    </div>
                    <div className='manageSubscription__buttonsBlock'>
                        <button type='submit' className='manageSubscriprion__btnUnsubscribe'> UNSUBSCRIBE </button>
                        <button type='submit' className='manageSubscriprion__btnUpgrade'> UPGRADE </button>
                    </div>
                </div>
                <div className='manageSubscription__offers'>
                    <div className='manageSubscription__advantages'>
                        <div className='manageSubscription__advantages_header'>Get Mingle Gold</div>
                        <img src={image} />
                        <div className='manageSubscription__advantages_main'>Unlimited Likes</div>
                        <div className='manageSubscription__advantages_secondary'>Send as many likes as you want</div>
                    </div>
                    <div className='manageSubscription__plan'>
                        <div className='manageSubscription__subscriptionType'>
                            <div className='manageSubscription__subscriptionType_number'>12</div>
                            <div className='manageSubscription__subscriptionType_text'>months</div>
                            <div className='manageSubscription__subscriptionType_payment'>$11/mo</div>
                            <div className='manageSubscription__subscriptionType_discount'>Save 43%</div>
                        </div>
                        <div className='manageSubscription__subscriptionType'>
                            <div className='manageSubscription__subscriptionType_number'>6</div>
                            <div className='manageSubscription__subscriptionType_text'>months</div>
                            <div className='manageSubscription__subscriptionType_payment'>$15/mo</div>
                            <div className='manageSubscription__subscriptionType_discount'>Save 22%</div>
                        </div>
                        <div className='manageSubscription__subscriptionType'>
                            <div className='manageSubscription__subscriptionType_number'>1</div>
                            <div className='manageSubscription__subscriptionType_text'>months</div>
                            <div className='manageSubscription__subscriptionType_payment'>$19/mo</div>
                        </div>
                    </div>
                    <div className='manageSubscription__buttonContinue'>
                        <button className='manageSubscription__btn'> CONTINUE </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageSubscription;