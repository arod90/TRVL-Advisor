import React, { useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import '../styles/HotCard.css';

const HotCard = ({ data }) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  return (
    <>
      <div className="cont">
        <div className="card">
          <div className="hot-cont">
            <div data-isOn={isOn} className="hot-item">
              <img
                src={
                  data && data.singleCardContent.cardPhotos[0]
                    ? data.singleCardContent.cardPhotos[
                        data.singleCardContent.cardPhotos.length - 1
                      ].sizes.urlTemplate
                        .replace('{width}', '700')
                        .replace('{height}', '400')
                    : 'no url found'
                }
                alt=""
              />
              <div className="p-cont">
                <p className="hot-adr">
                  {data && data.singleCardContent.secondaryInfo
                    ? data.singleCardContent.secondaryInfo.text
                    : 'not found'}
                </p>
                <div className="hot-line"></div>
                <p className="hot-name">
                  {data ? data.singleCardContent.cardTitle.string : 'not found'}
                </p>
                <div className="hot-line"></div>
                <p className="hot-link">
                  {data &&
                  data.singleCardContent.commerceButtons &&
                  data.singleCardContent.commerceButtons.singleButton.link
                    .externalUrl ? (
                    <a
                      href={
                        data.singleCardContent.commerceButtons.singleButton.link
                          .externalUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Hotel
                    </a>
                  ) : (
                    'booking website not found'
                  )}
                </p>
                <p className="hot-info">
                  Average cost per night:
                  {data &&
                  data.singleCardContent.commerceInfo &&
                  data.singleCardContent.commerceInfo.priceForDisplay
                    ? data.singleCardContent.commerceInfo.priceForDisplay.string
                    : 'not found'}{' '}
                  USD
                </p>
                <p className="hot-rating">
                  Rating :
                  {data && data.singleCardContent.bubbleRating
                    ? data.singleCardContent.bubbleRating.rating
                    : 'not found'}{' '}
                  stars
                </p>
                <p className="hot-rating">
                  Reviewed by:
                  {data && data.singleCardContent.bubbleRating
                    ? data.singleCardContent.bubbleRating.numberReviews.string
                    : 'not found'}{' '}
                  users
                </p>
                <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
                  <motion.div
                    data-isOn={isOn}
                    className="handle"
                    layout
                    transition={spring}
                  />
                </div>
                <h1 className="title-back">TRVL</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotCard;