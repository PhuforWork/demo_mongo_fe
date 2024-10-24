import * as React from 'react';

const priceStyle = ({ padding, textDecoration, locale, style, currency, price }) => {
     // console.log(padding, textDecoration, locale, style, currency, price);
     return (
          <div style={{ padding:  padding , textDecoration:  textDecoration  }}>
               {(Number(price)).toLocaleString(locale, { style: style, currency: currency })}
          </div>
     );
};

export default priceStyle;