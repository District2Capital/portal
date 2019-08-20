import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'utils/propTypes';
import axios from 'axios';
import classNames from 'classnames';
import GlobalContext from 'context/global-context';
import * as _ from 'lodash';

const Avatar = ({ rounded, circle, src, size, tag: Tag, className, style, ...restProps }) => {
  const [borderColor, changeBorderColor] = useState('');
  const { userInfo } = useContext(GlobalContext);
  const classes = classNames({ 'rounded-circle': circle, rounded }, className);

  useEffect(() => {
    if (!_.isEmpty(userInfo)) {
      if (userInfo.stripePlan === 'basic_package') changeBorderColor(' thickBorder border border-info');
      else if (userInfo.stripePlan === 'standard_package') changeBorderColor(' thickBorder border border-secondary');
      else if (userInfo.stripePlan === 'premium_package') changeBorderColor(' thickBorder border border-warning');
    }
  }, [userInfo]);

  return (
    <Tag
      src={src}
      style={{ width: size, height: size, ...style }}
      className={classes + borderColor}
      {...restProps}
    />
  );
};

Avatar.propTypes = {
  tag: PropTypes.component,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string,
  style: PropTypes.object,
};

Avatar.defaultProps = {
  tag: 'img',
  rounded: false,
  circle: true,
  size: 40,
  style: {}
};

export default Avatar;
