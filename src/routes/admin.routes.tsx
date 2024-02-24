import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths = [
  {
    name: "Admin Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },

  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },
];
