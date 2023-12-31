// import {
//     LikeIcon,
//     RevenueIcon,
//     TotalUsersIcon,
//     TransactionsIcon2,
//   } from "../util/icon"
import '../(home)/dashboard/styles.css'
import { TransactionsIcon, TransactionsIcon1, TransactionsIcon2, TransactionsIcon3 } from "../util/icon/icon"
  
  const statsData = [
    {
      id: 1,
      title: "total revenues",
      total: "$2,129,430",
      bcg: "#7FCD93",
      icon: <TransactionsIcon />,
      per : '+2.5%'
    },
    {
      id: 2,
      title: "Total Transactions",
      total: '1,520',
      bcg: "#DEBF85",
      icon: <TransactionsIcon1/>,
      per : '+1.7%'
    },
    {
      id: 3,
      title: "Total Likes",
      total: '9,721',
      bcg: "#ECA4A4",
      icon: <TransactionsIcon2/>,
      per : '+1.4%'
    },
    {
      id: 4,
      title: "Total Users",
      total: '9,721',
      bcg: "#A9B0E5",
      icon: <TransactionsIcon3/>,
      per : '+4.2%'
    },
  ]
  
  const StatsCard = () => {
    return (
      <section
      className="my-grid ">
        {statsData.map((stat) => {
          const { id, title, total, icon, bcg, per } = stat
          return (
            <article 
              key={id}
              style={{ boxShadow:'2px 2px 10px 2px #E0E0E0',
flexShrink: '0' }}
              className=" rounded-[20px] py-5 md:px-5 px-5
               bg-white hover:bg-blue-100
               "
            >
             <span
  style={{
    backgroundColor: bcg,
    width: '2rem',
    height: '2rem',
    padding: '.2rem',
    textAlign: 'center',
  }}
  className="flex justify-center items-center text-white rounded-full"
>
  {icon}
</span>

              <div className=" flex flex-col ">
                <span className=" font-lato text-sm capitalize py-1  ">
                  {title}
                </span>
                <div className="flex flex-end justify-between items-center">
                <span style={{fontSize:'1rem'}} className="font-openSans text-xl md:text-2xl font-bold py-2 ">
                  {total.toLocaleString()}
                </span>
                <span
  style={{ backgroundColor: '#E9F9EB', width: '47px', height: '24px', borderRadius: '34px', padding: '.2rem', textAlign: 'center' }}
  className="font-lato text-sm capitalize py-1"
>
  <span className="text-green-500">{per}</span>
</span>

                </div>
              </div>
            </article>
          )
        })}
      </section>
    )
  }
  
  export default StatsCard