import React from  "react"

export default function Profile(){
return(
    <div>
         <main className="h-[100vh] w-full bg-[#000000bf] fixed top-0 left-0 z-[999] grid place-items-center overflow-y-auto py-8 px-3 inset-0">
            <section className="w-full max-w-[400px] rounded-[6px] bg-white p-4 auth-popup-animation">
                <header>
                    <div className="flex justify-end">
                        <span className="material-icons text-primary cursor-pointer" onClick={closeAuthPopUpHandler}> close </span>
                    </div>
                    <h1 className="text-primary text-[30px] font-semibold text-center">Profile</h1>
                </header>
                <div className="flex flex-col gap-y-4 pt-5">
                    <p className="box-shadow p-2 flex gap-x-3 capitalize items-center"><span className="material-icons text-primary"> badge </span> {state.user.name}</p>
                    <p className="box-shadow p-2 flex gap-x-3 items-center"><span className="material-icons text-primary"> email </span> {state.user.email}</p>
                    <p className="box-shadow p-2 flex gap-x-3 capitalize items-center"><span className="material-icons text-primary"> accessibility_new </span> {state.user.gender}</p>
                    <Button className="w-full" onClick={submit} loading={loading}>Logout</Button>
                </div>
            </section>
        </main>
    </div>
)
}