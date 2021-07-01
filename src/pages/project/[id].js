import { connectToDatabase } from "../../util/mongodb";

const Project = ({ items, types }) => {
    console.log(items, types);
    return <>Project</>;
};

export default Project;

export const getStaticPaths = async () => {
    const { db } = await connectToDatabase();
    const types = await db.collection("projects").distinct("type");
    const paths = types.map((type) => ({ params: { id: type } }));
    return {
        paths: paths,
        fallback: true,
    };
};

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const { db } = await connectToDatabase();
    const items = await db.collection("projects").find({ type: id }).toArray();
    const types = await db.collection("projects").distinct("type");
    return {
        props: { items: JSON.parse(JSON.stringify(items)), types },
        revalidate: 30,
    };
};
