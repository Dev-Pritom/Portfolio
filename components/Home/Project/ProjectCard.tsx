// import { Button } from '@/components/ui/button';
// import { ExternalLink } from 'lucide-react';
// import Image from 'next/image';
// import React from 'react'
// import { FaGithub } from 'react-icons/fa6';

// type Props={
//     title:string;
//     description:string;
//     image:string;
//     techStack:string[];
//     demoUrl?:string;
//     githubUrl?:string;
// }
// const ProjectCard = ({title,description,image,techStack,demoUrl,githubUrl}:Props) => {
//   return (
//     <div className="group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden">
//       {/* Image Container */}
//       <div className="relative h-48 overflow-hidden">
//         <Image
//           src={image}
//           alt="title"
//           width={400}
//           height={400}
//           className="w-full h-full object-cover"
//         />
//       </div>
//       {/* main content */}
//       <div className="p-6">
//         <h3 className="text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-blue-500 transition-colors">
//           {title}
//         </h3>
//         <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
//           {description}
//         </p>
//         {/* techStack */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {techStack.map((tech) => (
//             <span
//               key={tech}
//               className="text-xs px-3 py-1 rounded-full bg-indigo-600 dark:bg-green-700  text-white font-medium "
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//         {/* buttons */}
//         <div className="flex flex-wrap gap-3">
//           {demoUrl && (
//             <Button size={"sm"} className={"flex-1 "}>
//               <a
//                 className="flex items-center"
//                 href="https://notesapp-gbc6xny40-dev-pritoms-projects.vercel.app/"
//                 target="_blank"
//                 rel="noopener noreffer"
//               >
//                 <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
//               </a>
//             </Button>
//           )}
//           {githubUrl && (
//             <Button variant={"outline"} size={"sm"} className={"flex-1 "}>
//               <a
//                 className="flex items-center"
//                 href="https://github.com/Dev-Pritom/NotesApp"
//                 target="_blank"
//                 rel="noopener noreffer"
//               >
//                 <FaGithub className="w-4 h-4 mr-2" /> Github Demo
//               </a>
//             </Button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectCard


import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { FaGithub } from 'react-icons/fa6';

type Props = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, techStack, demoUrl, githubUrl }: Props) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* main content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-blue-500 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* techStack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-indigo-600 dark:bg-green-700 text-white font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* buttons - always pinned to bottom */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {demoUrl && (
            <a
              href="https://notesapp-gbc6xny40-dev-pritoms-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 h-9 rounded-md px-3 text-sm font-medium bg-primary
               text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href="https://github.com/Dev-Pritom/NotesApp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 h-9 rounded-md px-3 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <FaGithub className="w-4 h-4" /> Github Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard