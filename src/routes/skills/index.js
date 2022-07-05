import graphcms from "$lib/graphcms";
import { skillSectionsQuery } from "$lib/queries";

export async function get() {
    const { skillSections } = await graphcms.request(skillSectionsQuery);
    
    return {
        body: {
            skillSections
        }
    }
}
