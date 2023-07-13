import  style  from "./Aboutproperty.module.scss"

const Details = ({amenities, rooms, address, more, map }) => {
    

    return (
    <div className={style.table}>
    <div className={style.row}>
      <div className={style.cell}>
        <span className={style.label}>Amenities:</span>
      </div>
      <div className={style.cell}>
        <span className={style.descriptiontable}>{amenities}</span>
      </div>
    </div>
    <div className={style.row}>
      <div className={style.cell}>
        <span className={style.label}>Rooms:</span>
      </div>
      <div className={style.cell}>
        <span className={style.descriptiontable}>{rooms}</span>
      </div>
    </div>


    
    <div className={style.row}>
      <div className={style.cell}>
        <span className={style.label}>Occupancy Status:</span>
      </div>
      <div className={style.cell}>
      <span className={style.descriptiontable}>Free</span>
      </div>
    </div>

    <div className={style.row}>
      <div className={style.cell}>
        <span className={style.label}>Address:</span>
      </div>
      <div className={style.cell}>
      <span className={style.descriptiontable}>{address}</span>
      <iframe
              src={map}
              // width="400"
              // height="250"
              // style={{ border: '0' }}
              className={style.map}
              allowFullScreen
              loading="lazy"
              title="Map">
              
            </iframe>
      </div>
    </div>

    <div className={style.row}>
      <div className={style.cell}>
        <span className={style.label}>More:</span>
      </div>
      <div className={style.cell}>
      <span className={style.descriptiontable}>{more}</span>
      </div>
    </div>
</div>
)};

export default Details; 