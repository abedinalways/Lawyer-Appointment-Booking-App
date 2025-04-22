import { useLoaderData } from 'react-router';
import { motion } from 'framer-motion';

// Animation variants for the accordion items
const accordionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Animation variants for the heading and intro
const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Blogs = () => {
  const blogsData = useLoaderData();
  console.log(blogsData);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
          React Mastery Hub
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Unlock the full potential of React! Discover expert tips, advanced
          techniques, and best practices for building dynamic, high-performance
          user interfaces with React.
        </p>
      </motion.div>

      {/* About React */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="bg-white rounded-xl shadow-lg p-6 mb-12 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          What is React?
        </h2>
        <p className="text-gray-600">
          React is a powerful JavaScript library for building user interfaces,
          particularly single-page applications. Developed by Facebook, it
          enables developers to create reusable UI components, manage state
          efficiently, and build fast, interactive web applications. With its
          component-based architecture and virtual DOM, React simplifies complex
          UI development and ensures optimal performance.
        </p>
        <p className="mt-4 text-gray-600">
          From hooks to context, React offers a rich ecosystem of tools and
          libraries like React Router, Redux, and Framer Motion, making it a
          go-to choice for modern web development. Whether you're crafting a
          blog or a complex dashboard, React empowers you to build with
          flexibility and scalability.
        </p>
      </motion.div>

      {/* Blog Posts Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Latest React Articles
        </h2>
        <div className="space-y-4">
          {blogsData.map((blog, index) => (
            <motion.div
              key={blog.id}
              variants={accordionVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="collapse collapse-arrow">
                <input
                  type="radio"
                  name="my-accordion-2"
                  defaultChecked={index === 0}
                />
                <div className="collapse-title text-xl font-semibold text-gray-800 bg-gray-50 p-4 rounded-t-xl">
                  {blog.question}
                </div>
                <div className="collapse-content text-gray-600 p-4">
                  <p>{blog.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
