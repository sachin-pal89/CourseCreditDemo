'use client'

function PoolCard() {
  return (
    <>
      <div className="card w-[90%] lg:h-[300px]  bg-neutral text-neutral-content mx-auto shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Cookies!</h2>
          <p>We are using cookies for no reason.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PoolCard
