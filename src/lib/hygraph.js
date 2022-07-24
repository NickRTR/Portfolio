import dotenv from "dotenv";
import { GraphQLClient } from "graphql-request";

dotenv.config();

export const graphcms = new GraphQLClient(process.env["GRAPHCMS_URL"], {
	headers: {
		Authorization: "Bearer " + process.env["GRAPHCMS_TOKEN"]
	}
});

export default graphcms;
