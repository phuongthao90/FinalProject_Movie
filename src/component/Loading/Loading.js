import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Loading() {

    const { isLoading } = useSelector(state => state.LoadingReducer)

    return <Fragment>
        {isLoading ? <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-100' style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>
            <div className='text-4xl text-white'>...Loading</div>
        </div> : ''}


    </Fragment>
}
