import React from 'react';
import {withRouter} from 'react-router-dom';
import s from './cafe.module.css';
import r from './cafee.module.css';
// import b from './button.module.css';

const ModalCafe = (props) => {
    const { modalContOne, modalOne, handleClose, modalPicOne } = props;
    
    return (
        <div className={`${s.container} ${r.container}`}>
            <div className={`${s.modalContener} ${r.modalContener}`}>
                    <div>
                    < span className={s.buttons} onClick={() => handleClose()}>&times;</span>
                    </div>
                <div>
                    <h2>{modalContOne.name}</h2>
                </div>
                <div>
                    {/* <img src={modalCont.srcImg} alt={modalCont.name} /> */}
                </div>
               
               <div className={`${s.imgContener} ${r.imgContener}`}>
                    <img src={modalPicOne.src1} />
                    <img src={modalPicOne.src2} />
                    <img src={modalPicOne.src3} />
                    <img src={modalPicOne.src4} />
              </div>
                {/* <button onClick={() => handleClose()}>closss</button> */}
                {/* <button className={b.glowonhover} type="button">MENU</button> */}
                            
            </div>
           
        </div>
    )
};

export default withRouter(ModalCafe);

