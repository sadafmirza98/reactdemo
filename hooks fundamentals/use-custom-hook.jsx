import React, {useEffect, useState,useLayoutEffect} from 'react';

import useMobileView from './screen-view';

const HelloComponent = (props) =>{
    const isMobile = useMobileView()

    return <p> Screen View : {JSON.stringify(isMobile)}</p>
}

export default HelloComponent;