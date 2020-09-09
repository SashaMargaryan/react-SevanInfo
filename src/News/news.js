import React , {useEffect , useState} from 'react';
import {withRouter} from 'react-router-dom';
import s from './news.module.css';

import Loading from '../Loading/Loading';
import HomeOne from '../About/home1';


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


const News = (props) => {
	 
    const {  history } = props;
	const [loading, setLoading] = useState(false);
	const [arr, setArr] = useState([]);
	const [obj , setObj] = useState({});
	const [error, setError] = useState('');

	const {t} = props;

	

	const fetchS = () => {
		setLoading(true);
		fetch('https://run.mocky.io/v3/36da79e6-6009-49b6-8eff-e66e69946d43')
			.then(resp => resp.json().then(data => {
				if (resp.ok) {
					return data;
				} else return Promise.reject(data);
			}))
			.then(data => {
				setLoading(false);
				// console.log(data.news);
				setArr(data.newsDetail);
				setObj(data.homeNewsDetail);
				
			})
			.catch(err => {
				console.log(err, 'EROR');
				setLoading(true);
				setError(err);
			})
	}

	useEffect(() => {
		fetchS();
	}, [])




	if (loading) {
		return <div className="loading-container"><Loading/></div>
	}
	if (error) {
		return <div className="error">{error}</div>
	}

    return (
		<div className="super_container">

		<HomeOne src={obj.src} name={t('homeNewsDetail.name')} />

		<div className={s.cont}>
		{/* <HomeOne src='./images/sevanNews.jpg'  name='News'/> */}
		<div className={s.flexContainer}>
				   <div className={s.conte}>
					   {
						   arr.map((item) => {
							   return (
								   <nav className={s.nav}  key={item.id} onClick={() => history.push(`/maynews/${item.id}`)} >
									   <div className={s.div1}>
											<h3>{t(`newsDetail.${item.id}.name`)}</h3>
											<hr />
											<h4>{t(`newsDetail.${item.id}.about`)}</h4>
										   <img className={s.imig} src={item.srcImg} />
										  
									   </div>
							   
								   </nav>
							   )
						   })
					   }
				   </div>
				   
				   
		</div>
		
		</div>
		</div>

    )
}
export default  translate(withRouter(News));

{/* <p>{t(`news.${item.id}.name`)}</p> */}






