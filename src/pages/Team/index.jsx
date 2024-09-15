import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TeamCard from "./team-card";
import { teamMember } from "../../constants/team-member";
import { useState } from "react";
import CustomPagination from "../../components/shared/pagination";

const Team = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(teamMember.length / usersPerPage);

  // Get users for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = teamMember.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Helmet>
        <title>Team - Porto</title>
      </Helmet>
      <div
        style={{
          background:
            "url(https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2018/11/page-header-background-transparent-2.jpg)",
        }}
        className="py-[135px] mt-[125px] text-center text-white "
      >
        <Link to={"/"} className="text-xs">
          HOME
        </Link>
        <span className="text-xs mx-2"> / </span>
        <span className="uppercase text-xs text-white opacity-[0.7]">
          {" "}
          Meet Our Team
        </span>
        <h4 className="text-[31px] font-bold">Meet Our Team</h4>
      </div>

      {currentUsers.map((member, index) => (
        <div key={member.id} className="pt-10">
          <TeamCard member={member} index={index} currentUsers={currentUsers} />
        </div>
      ))}
      <div className="py-5 w-[190px] mx-auto">
        <CustomPagination count={totalPages} onPageChange={handlePageChange} />
      </div>
    </>
  );
};

export default Team;
