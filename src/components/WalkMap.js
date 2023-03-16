import { Link } from 'react-router-dom';
import mapStyle from './Map.module.css';

export function WalkMap({ map }) {

    return (
        <Link to={`/walk/${map.id}`} className={ mapStyle.link }>
            <div className={ mapStyle.map }>
                <div>
                    <h3>[산책로]</h3>
                    <p>{map.properties.cat_nam}</p>
                </div>
                <div>
                    <h3>[코스명]</h3>
                    <p>{map.properties.cos_nam}{map.properties.cos_num}</p>
                </div>
                <div>
                    <h3>[코스]</h3>
                    <p>{map.properties.lnk_nam}</p>
                </div>
                <div className={ mapStyle.lvl }>
                <h5>난이도</h5><p>{map.properties.cos_lvl}</p>
                </div>
            </div>
        </Link>
    );
}

export default WalkMap;