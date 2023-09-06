// *This file allows a layout for all the pages in the (auth) organizational folder 

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
        <div className="bg-red-500 h-full">
            {children}
        </div>
     );
}
 
export default AuthLayout;