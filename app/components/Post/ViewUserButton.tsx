"use client";

interface ViewUserButtonProps {
  userId: number
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({userId}) => {
   const handelClick = () => alert(`user id: ${userId}`)
  return (
    <>
      <button onClick={handelClick}>Lihat User</button>
    </>
  );
};
export default ViewUserButton