import './PackageCard.css'
const PackageCard = ({cityImage,day,month,year,count,packageCity,price,review}) => {
  return (
    <div className='package'>
        <div className='packageContain'>
            <img src={cityImage}/>
            <div className='packageData'>
                <div>
                    {day},{month} {year}
                </div>
                <div>
                    {count}+ People
                </div>
            </div>
            <h2>{packageCity}</h2>
            <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
            <div className='packageInfo'>
                <div>
                    {price} $
                </div>
                <div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.47956 13.8516C3.47966 13.8516 3.47969 13.8518 3.4796 13.8518C3.16111 14.023 2.79992 13.7223 2.86427 13.3386L3.20989 11.2704C3.42288 9.99586 3.00702 8.69693 2.09342 7.78307L0.64167 6.33092C0.370138 6.0588 0.511269 5.56135 0.875238 5.50761L2.82118 5.21726C4.13248 5.0216 5.26163 4.1889 5.83601 2.99397L6.7202 1.15449C6.88279 0.816504 7.32269 0.816504 7.48528 1.15449L8.36947 2.99396C8.94385 4.1889 10.073 5.0216 11.3843 5.21726L13.3302 5.50761C13.6942 5.56135 13.8353 6.0588 13.563 6.33092L12.1116 7.78312C11.1983 8.69697 10.7826 9.9957 10.9955 11.2701L11.3412 13.3386C11.4056 13.7225 11.0441 14.0232 10.7255 13.8516L7.53614 12.131C7.26487 11.9846 6.93815 11.9846 6.66691 12.131L3.47951 13.8514C3.47941 13.8515 3.47945 13.8516 3.47956 13.8516Z" fill="#DF6951"/>
                </svg> {review}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PackageCard