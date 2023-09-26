import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 z-10 px-12 absolute bg-gradient-to-r from-black w-full aspect-video '>
        {/* <img className='h-32 w-80' src="https://occ-0-4822-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbcT7GhYMSuWBSFeYghrGh4o4-PGDyMuw6bnuj2cPt9QUfjbJL8aV5uBbDUSaeWK-Oi_mi__wtzsVhDesH_TSvi9QOfetrhZtC2LdZYLYmNRBZzwD_og_dIdR9tI1k2VYZnaJZWGhcB2I-szyZW0_xR5jkxHy78cdII4ylehAd6sivWczvoi3g.webp?r=44f" alt="" /> */}
        <h1 className='font-bold text-6xl pt-36 text-white'>{title}</h1>
        
        <p className='w-[450px] py-6 text-white'>{overview}</p>
        <div className='flex'>
            <button className='bg-white text-black py-2 px-12 text-xl  rounded-lg flex items-center'><img className='h-4 w-4' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ibHRyLTR6M3F2cCBlMXN2dXdmbzEiIGRhdGEtbmFtZT0iUGxheSIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIGQ9Ik01IDIuNjkxMjdDNSAxLjkzMDY3IDUuODE1NDcgMS40NDg1MSA2LjQ4MTkyIDEuODE1MDZMMjMuNDA2OSAxMS4xMjM4QzI0LjA5NzcgMTEuNTAzNyAyNC4wOTc3IDEyLjQ5NjMgMjMuNDA2OSAxMi44NzYyTDYuNDgxOTIgMjIuMTg0OUM1LjgxNTQ2IDIyLjU1MTUgNSAyMi4wNjkzIDUgMjEuMzA4N1YyLjY5MTI3WiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+" alt="" /><span className='ml-1 text-lg'>Play</span></button>
            <button className='bg-gray-500 ml-2 text-white py-2 px-12 text-xl bg-opacity-50 rounded-lg flex items-center'><img className='h-4 w-4' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ibHRyLTR6M3F2cCBlMXN2dXdmbzEiIGRhdGEtbmFtZT0iQ2lyY2xlSSIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMkM2LjQ3NzE1IDIgMiA2LjQ3NzE1IDIgMTJDMiAxNy41MjI4IDYuNDc3MTUgMjIgMTIgMjJDMTcuNTIyOCAyMiAyMiAxNy41MjI4IDIyIDEyQzIyIDYuNDc3MTUgMTcuNTIyOCAyIDEyIDJaTTAgMTJDMCA1LjM3MjU4IDUuMzcyNTggMCAxMiAwQzE4LjYyNzQgMCAyNCA1LjM3MjU4IDI0IDEyQzI0IDE4LjYyNzQgMTguNjI3NCAyNCAxMiAyNEM1LjM3MjU4IDI0IDAgMTguNjI3NCAwIDEyWk0xMyAxMFYxOEgxMVYxMEgxM1pNMTIgOC41QzEyLjgyODQgOC41IDEzLjUgNy44Mjg0MyAxMy41IDdDMTMuNSA2LjE3MTU3IDEyLjgyODQgNS41IDEyIDUuNUMxMS4xNzE2IDUuNSAxMC41IDYuMTcxNTcgMTAuNSA3QzEwLjUgNy44Mjg0MyAxMS4xNzE2IDguNSAxMiA4LjVaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=" alt="" /><span className='ml-1 text-lg'>More info</span></button>
        </div>
    </div>

  )
}

export default VideoTitle