import React , {useEffect , useState} from 'react';

import HomeOne from '../About/home1';
import Loading from '../Loading/Loading';

import Pagination from '../About/pagination';
import ModalCafe from './ModalCafePicture/CafeModal';
import ss from './ModalCafePicture/cafe.module.css';
import Modal from './ModalCofe/cofeModal';
import s from './ModalCofe/modal.module.css';
import b from './ModalResturant/button.module.css';




// Translation Higher Order Component
import {
	setTranslations,
	setDefaultLanguage,
	setLanguageCookie,
	setLanguage,
	translate,
  } from 'react-switch-lang';


  import en from '../en.json';
  import am from '../am.json';
  import ru from '../ru.json';


  // Do this two lines only when setting up the application
setTranslations({ en, am , ru });
setDefaultLanguage('en');
 
// If you want to remember selected language
setLanguageCookie();



const CafeBar = (props) => {

	const { history } = props;

	const [loading, setLoading] = useState(false);
	//modal menu
	const [modalContOne, setModalContOne] = useState("");
	const [modalOne, setModalOne] = useState(false);
	const [modalPicOne, setModalPicOne] = useState({});


	//Modal pictures

	const [modalCont, setModalCont] = useState("");
	const [modalPic, setModalPic] = useState({});
	const [modal, setModal] = useState(false);

	///
	
	const [obj , setObj] = useState({});
	const [arr, setArr] = useState([]);
	const [descript , setDescript] = useState({});
	const [page, setPage] = useState(props.match.params.id ? +props.match.params.id : 1);
	const [perPage, setPerPage] = useState(3);
	const [error, setError] = useState('');
	const {t} = props;







	const fetchS = () => {
		setLoading(true);
		fetch('https://run.mocky.io/v3/efb19eff-adc9-4a31-8a0c-2480ac01af4f')
			.then(resp => resp.json().then(data => {
				if (resp.ok) {
					return data;
				} else return Promise.reject(data);
			}))
			.then(data => {
				setLoading(false);
				// console.log(data);
				setArr(data.cafe);
				setObj(data.homeCafe);
				setDescript(data.descriptionCafe);
			})
			.catch(err => {
				console.log(err, 'EROR');
				setLoading(true);
				setError(err);
			})
	};

	
	const hendleClickOne = value => {
		setModalCont(value);
		setModalPic(value.menu)
		// console.log(modalCont);
		setModal(!modal);
	  };
	  
     const handleCloseOne = () => {
        setModal(false);
	  };
	  

	  //Modal pictures


	  const hendleClick = valueOne => {
		setModalContOne(valueOne);
		setModalPicOne(valueOne.picture)

		// console.log(modalCont);
		setModalOne(!modalOne);
	  };
	  
     const handleClose = () => {
        setModalOne(false);
	  };

	useEffect(() => {
		fetchS();
		history.push(`/cafe/page/${page}`);


	}, [page])



	// Get current posts
	const indexOfLastPost = page * perPage;
	const indexOfFirstPost = indexOfLastPost - perPage;
	const changeArr = arr.slice(indexOfFirstPost, indexOfLastPost);
	// console.log(changeArr)


	// function pagination

	const handlePaginationClick = (direction) => {
		let nextPage = page;
		nextPage = direction === "next" ? nextPage + 1 : nextPage - 1;
		setPage(nextPage);

	}

	if (loading) {
		return <div className="loading-container"><Loading/></div>
	}
	if (error) {
		return <div className="error">{error}</div>
	}

    return (
        <div className="super_container">

    <HomeOne  src={obj.src} name={t('homeCafe.name')} />


        <div className="blog">
		<div className="container">
			<div className="row">
				<div className="col">

					
					<div className="blog_posts">
						
						
					{
                        changeArr.map(item => {
                            return (
                                <div className="blog_post" key={item.id}>
                            
                                <div className="row" >
                                    
                                    <div className="col-xl-7 col-lg-6">
                                        
                                        <div className="blog_post_image" >
                                            <img width="500" height="300" src={item.srcImg}  alt={item.name}  onClick={() => hendleClickOne(item)} />
										</div>
                                        <iframe src={item.srcMap} width="500" height="200"  aria-hidden="false"  ></iframe>
                                    </div>
                                    <div className="col-xl-5 col-lg-6">
                                        <div className="blog_post_content">
                                            
                                            <div className="pb_title"><a href="#">{t(`cafe.${item.id}.name`)} </a></div>
                                            <div className="pb_text p_contact" >
                                                <p>{t('descriptionCafe.address')}: {t(`cafe.${item.id}.address`)}</p>
                                                <p>{t('descriptionCafe.WorkingTime')}:  {t(`cafe.${item.id}.time`)} </p>
                                                <p>{t('descriptionCafe.phone')}: {t(`cafe.${item.id}.phone`)}</p>
                                                <p>{descript.link}: <a href={item.link}  target="blank">LINK</a></p>

												<button className={b.glowonhover}  onClick={() => hendleClick(item)}  type="button">{t('descriptionHotel.picture')}</button>

												<br/>
												
												 <button className={b.glowonhover}  onClick={() => hendleClickOne(item)}  type="button">{descript.menu}</button>
    
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <hr style={{backgroundColor:'#1D9EB4' , height:'5px' , borderRadius:'1000%' }}/>
                            </div>
                            
                            )
                        })
                    }


					</div>
					</div>
					</div>
						
        	</div>

			{/* Modal Pictures */}



			<div 
							className={ss.divContainer} 
							style={{ display: modalOne ? "block" : "none" }}
							// onClick={() => handleClose()}
							
						>
							<ModalCafe
								modalContOne={modalContOne} 
								handleClose={ handleClose }
								modalOne={modalOne}
								modalPicOne={modalPicOne} 
							/>
						</div>




						{/* MoDal Menu */}


						<div 
							className={s.divContainer} 
							style={{ display: modal ? "block" : "none" }}
							onClick={() => handleCloseOne()}
							
						>
							<Modal 
								modalCont={modalCont} 
								handleCloseOne={ handleCloseOne }
								modal={modal} 
								modalPic={modalPic}
							/>
						</div>

        </div>

			<Pagination
				page={page}
				perPage={perPage}
				totalPosts={arr.length}
				paginate={handlePaginationClick}  
			/>

        </div>
    );
};

export default translate(CafeBar);
