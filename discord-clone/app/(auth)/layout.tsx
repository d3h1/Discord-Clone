// *This file allows a layout for all the pages in the (auth) organizational folder 

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
        <div className="flex items-center justify-center h-full  bg-red-500">
            {children}
        </div>
     );
}
 
export default AuthLayout;