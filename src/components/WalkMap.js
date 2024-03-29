import { Link } from 'react-router-dom';
import mapStyle from './Map.module.css';

export function WalkMap({ map }) {

    function Lvl({map}) {
        if (map.properties.cos_lvl) {
            return (
                <div className={ mapStyle.lvl }>
                <h5>난이도</h5><p>{map.properties.cos_lvl}</p>
                </div>
            );
        } else {
            return (
                <div className={ mapStyle.lvl }>
                <h5>난이도</h5><p>무</p>
                </div>
            );
        }
    }

    return (
        <Link to={`/walk/${map.id}`} className={ mapStyle.link }>
            <div className={ mapStyle.map }>
                <div>
                    <h1>{map.properties.cos_nam} {map.properties.cos_num}</h1>
                </div>
                <div>
                    <h1>{map.properties.lnk_nam}</h1>
                </div>
                <Lvl map={map}/>
            </div>
        </Link>
    );
}

export default WalkMap;