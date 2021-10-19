// import React, { memo, useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import { compose } from 'redux';

// import { createStructuredSelector } from 'reselect';
// import { useInjectSaga } from 'utils/injectSaga';
// import { useInjectReducer } from 'utils/injectReducer';
// import { MainContent, Title } from './Student.styled';
// import StudentChild from './StudentChild';
// import { getStudentRequest, deleteStudent, createStudent } from '../Students/actions';
// import makeSelectStudents, {
//   makeSelectLoading,
//   makeSelectError,
//   makeSelectMessage,
// } from '../Students/selectors';
// import saga from '../Students/saga';
// import reducer from '../Students/reducer';

// function Student({ fetchStudents, removeStudent, createStudentt, students }) {
//   useInjectReducer({ key: 'students', reducer });
//   useInjectSaga({ key: 'students', saga });

//   const [student, setStudent] = useState({
//     email: '',
//     username: '',
//     website: '',
//   });
//   const [visibleStudent, setVisibleStudent] = useState(5);
//   const showMoreItems = () => {
//     setVisibleStudent(preValue => preValue + 5);
//   };
//   // const { email, website, username } = student;
//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   return (
//     <MainContent>
//       <div>Student details</div>
//       <Title>
//         <span>No</span>
//         <span>Name</span>

//         <span>Address</span>
//         <span>Gender</span>
//         <span>Birthday</span>
//         <span>More</span>
//       </Title>
//       {students.slice(0, visibleStudent).map(studentInfo => (
//         <StudentChild
//           key={studentInfo.id}
//           id={studentInfo.id}
//           name={studentInfo.name}
//           address={studentInfo.website}
//           gender={studentInfo.username}
//           birthday={studentInfo.phone}
//         />
//       ))}

//       <button type="button" onClick={showMoreItems}>
//         Load More
//       </button>
//     </MainContent>
//   );
// }
// const mapStateToProps = createStructuredSelector({
//   students: makeSelectStudents(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
//   message: makeSelectMessage(),
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchStudents: () => dispatch(getStudentRequest()),
//     removeStudent: id => dispatch(deleteStudent(id)),
//     createStudentt: student => dispatch(createStudent(student)),
//   };
// }
// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

// export default compose(
//   withConnect,
//   memo,
// )(Student);
