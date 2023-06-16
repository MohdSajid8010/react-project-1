import React from "react";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Section from "./Component/Section"
import Footer  from "./Component/Footer"

let arrOfObj =
    [{
        title: "Skill",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora modi quod repellat, animi veritatis nam voluptatum explicabo quis asperiores labore voluptas architecto cupiditate ipsa? Suscipit magni, dignissimos ex recusandae eos, exercitationem laudantium, incidunt ratione nisi officiis soluta dolor molestias! Aspernatur, velit obcaecati? Libero ipsa eligendi nemo odit expedita veritatis adipisci quis, autem ab? Reprehenderit placeat voluptatibus, iste in numquam deleniti consectetur ratione libero perspiciatis, facilis natus. Minima quia eius veritatis eveniet animi enim doloremque adipisci neque assumenda, voluptatibus repudiandae quis iusto eum sit dignissimos aliquam velit, reprehenderit cupiditate, officia quasi eaque tenetur repellat praesentium? Distinctio eum perspiciatis rem, praesentium porro ex asperiores, reiciendis repellendus cumque, totam odio. Soluta neque reiciendis illo, repellendus eius obcaecati molestiae, asperiores, animi repudiandae error optio"
    },
    {
        title: "Qualification",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora modi quod repellat, animi veritatis nam voluptatum explicabo quis asperiores labore voluptas architecto cupiditate ipsa? Suscipit magni, dignissimos ex recusandae eos, exercitationem laudantium, incidunt ratione nisi officiis soluta dolor molestias! Aspernatur, velit obcaecati? Libero ipsa eligendi nemo odit expedita veritatis adipisci quis, autem ab? Reprehenderit placeat voluptatibus, iste in numquam deleniti consectetur ratione libero perspiciatis, facilis natus. Minima quia eius veritatis eveniet animi enim doloremque adipisci neque assumenda, voluptatibus repudiandae quis iusto eum sit dignissimos aliquam velit, reprehenderit cupiditate, officia quasi eaque tenetur repellat praesentium? Distinctio eum perspiciatis rem, praesentium porro ex asperiores, reiciendis repellendus cumque, totam odio. Soluta neque reiciendis illo, repellendus eius obcaecati molestiae, asperiores, animi repudiandae error optio"
    },
    {
        title: "Experience",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora modi quod repellat, animi veritatis nam voluptatum explicabo quis asperiores labore voluptas architecto cupiditate ipsa? Suscipit magni, dignissimos ex recusandae eos, exercitationem laudantium, incidunt ratione nisi officiis soluta dolor molestias! Aspernatur, velit obcaecati? Libero ipsa eligendi nemo odit expedita veritatis adipisci quis, autem ab? Reprehenderit placeat voluptatibus, iste in numquam deleniti consectetur ratione libero perspiciatis, facilis natus. Minima quia eius veritatis eveniet animi enim doloremque adipisci neque assumenda, voluptatibus repudiandae quis iusto eum sit dignissimos aliquam velit, reprehenderit cupiditate, officia quasi eaque tenetur repellat praesentium? Distinctio eum perspiciatis rem, praesentium porro ex asperiores, reiciendis repellendus cumque, totam odio. Soluta neque reiciendis illo, repellendus eius obcaecati molestiae, asperiores, animi repudiandae error optio"
    }
    ]
const App = () => {
    return <div>
        <Navbar />
        <About />

        {/* <Section
        title="Skill"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora modi quod repellat, animi veritatis nam voluptatum explicabo quis asperiores labore voluptas architecto cupiditate ipsa? Suscipit magni, dignissimos ex recusandae eos, exercitationem laudantium, incidunt ratione nisi officiis soluta dolor molestias! Aspernatur, velit obcaecati? Libero ipsa eligendi nemo odit expedita veritatis adipisci quis, autem ab? Reprehenderit placeat voluptatibus, iste in numquam deleniti consectetur ratione libero perspiciatis, facilis natus. Minima quia eius veritatis eveniet animi enim doloremque adipisci neque assumenda, voluptatibus repudiandae quis iusto eum sit dignissimos aliquam velit, reprehenderit cupiditate, officia quasi eaque tenetur repellat praesentium? Distinctio eum perspiciatis rem, praesentium porro ex asperiores, reiciendis repellendus cumque, totam odio. Soluta neque reiciendis illo, repellendus eius obcaecati molestiae, asperiores, animi repudiandae error optio"
        />
         <Section
        title="Qualification"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora modi quod repellat, animi veritatis nam voluptatum explicabo quis asperiores labore voluptas architecto cupiditate ipsa? Suscipit magni, dignissimos ex recusandae eos, exercitationem laudantium, incidunt ratione nisi officiis soluta dolor molestias! Aspernatur, velit obcaecati? Libero ipsa eligendi nemo odit expedita veritatis adipisci quis, autem ab? Reprehenderit placeat voluptatibus, iste in numquam deleniti consectetur ratione libero perspiciatis, facilis natus. Minima quia eius veritatis eveniet animi enim doloremque adipisci neque assumenda, voluptatibus repudiandae quis iusto eum sit dignissimos aliquam velit, reprehenderit cupiditate, officia quasi eaque tenetur repellat praesentium? Distinctio eum perspiciatis rem, praesentium porro ex asperiores, reiciendis repellendus cumque, totam odio. Soluta neque reiciendis illo, repellendus eius obcaecati molestiae, asperiores, animi repudiandae error optio"
        />
         <Section
        title="Experience"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora modi quod repellat, animi veritatis nam voluptatum explicabo quis asperiores labore voluptas architecto cupiditate ipsa? Suscipit magni, dignissimos ex recusandae eos, exercitationem laudantium, incidunt ratione nisi officiis soluta dolor molestias! Aspernatur, velit obcaecati? Libero ipsa eligendi nemo odit expedita veritatis adipisci quis, autem ab? Reprehenderit placeat voluptatibus, iste in numquam deleniti consectetur ratione libero perspiciatis, facilis natus. Minima quia eius veritatis eveniet animi enim doloremque adipisci neque assumenda, voluptatibus repudiandae quis iusto eum sit dignissimos aliquam velit, reprehenderit cupiditate, officia quasi eaque tenetur repellat praesentium? Distinctio eum perspiciatis rem, praesentium porro ex asperiores, reiciendis repellendus cumque, totam odio. Soluta neque reiciendis illo, repellendus eius obcaecati molestiae, asperiores, animi repudiandae error optio"
        /> */}

        {
            arrOfObj.map((obj) => {
                return (<Section
                    title={obj.title}
                    description={obj.description}
                />)

            })
        }


<Footer/>

    </div>
}

export default App;