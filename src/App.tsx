import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home";
import "./app.css";
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Algorithms from "./pages/algorithms/Algorithms";
import Layout from "./components/layout/layout/Layout";
import Faq from "./pages/faq/Faq";
import NavBar from "./components/layout/header/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import Announcement from "./components/layout/header/Announcement";
import Gallery from "./pages/forum/Gallery";
import Contact from "./pages/contactus/Contact";
import NewsAndUpdates from "./pages/NewsAndUpdates";
import About from "./pages/about/About";
import Academia from "./pages/academia/Academia";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Announcement />
        <NavBar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "academia",
    element: (
      <Layout>
        <Academia />
      </Layout>
    ),
  },
  {
    path: "algorithms",
    element: (
      <Layout>
        <Algorithms />{" "}
      </Layout>
    ),
  },
  {
    path: "blog",
    element: (
      <Layout>
        <Blog />{" "}
      </Layout>
    ),
  },
  {
    path: "gallery",
    element: (
      <Layout>
        <Gallery />{" "}
      </Layout>
    ),
  },
  {
    path: "about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "newsandupdates",
    element: (
      <Layout>
        <NewsAndUpdates />
      </Layout>
    ),
  },
  {
    path: "contact",
    element: (
      <Layout>
        <Contact />{" "}
      </Layout>
    ),
  },
  {
    path: "faqs",
    element: (
      <Layout>
        <Faq />{" "}
      </Layout>
    ),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
