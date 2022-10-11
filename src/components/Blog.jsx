import React from 'react';

const Blog = () => {
    return (
        <div className='my-10 mx-auto grid justify-items-center'>

            <div className="max-w-[90%] my-2 md:max-w-[70%] p-6 overflow-hidden rounded-lg shadow-md text-slate-900 bg-slate-100">
                <article>
                    <h2 className="text-xl font-bold">What is the purpose of react router?</h2>
                    <p className="mt-4 text-slate-600">React Router is an API for React applications. Most current code is written with React Router 3, although version 4 has been released. React Router uses dynamic routing.</p>
                    <p className="mt-4 text-slate-600">
                        When we say dynamic routing, we mean routing that takes place as your app is rendering, not in a configuration or convention outside of a running app. That means almost everything is a component in React Router. — React Training
                    </p>
                    <p className="mt-4 text-slate-600">
                        Why use React Router?
                        React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

                        By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.
                    </p>


                </article>



            </div>
            <div className="max-w-[90%] my-2 md:max-w-[70%] p-6 overflow-hidden rounded-lg shadow-md text-slate-900 bg-slate-100">
                <article>
                    <h2 className="text-xl font-bold">How does context api works?</h2>
                    <p className="mt-4 text-slate-600">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    <p className="mt-4 text-slate-600">
                        Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
                    </p>
                    <p className="mt-4 text-slate-600">
                        React context API: How it works?
                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                    </p>

                </article>



            </div>
            <div className="max-w-[90%] my-2 md:max-w-[70%] p-6 overflow-hidden rounded-lg shadow-md text-slate-900 bg-slate-100">
                <article>
                    <h2 className="text-xl font-bold">Explanation of useRef</h2>
                    <p className="mt-4 text-slate-600">This an overview of useRef for those new to React and hooks and assumes a basic understanding of what the DOM is.

                        useRef is a hook that can be tricky to get to grips with since it’s one that you might only meet once in a blue moon. That’s by design.

                        But understanding what it is and what it does means gaining a much better understanding of how React works overall, and at the end of the day isn’t that what we all want in our heart of hearts? ❣️

                        useRef say what!?
                        Ok I promise this is an article for newer react users but this next bit is heavy, bare with me! 🐻

                        First I’ll give a high level overview of what useRef is, then I’ll try and explain things with more context so you have an understanding of what useRef is doing and why you’d ever want to use it.

                        Ok here goes…

                        useRef is a hook which returns an object with a current property set to the value passed to the hook.
                    </p>

                </article>



            </div>
        </div>
    );
};

export default Blog;