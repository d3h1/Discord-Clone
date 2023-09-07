import { UserButton } from "@clerk/nextjs"

const Home = () => {
  return (
    <div className="h-full">
      {/* We only want logged in users to access this page */}
      <UserButton 
        afterSignOutUrl="/"
      />
    </div>
  )
}

export default Home
