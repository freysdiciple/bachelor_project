const Templates = {

    Relationship: {
        incoming: {
            V_Source: {
                create: (path, incoming) => {
                    return (
                        `
                        exports.create_${incoming.identifier}_target = onDocumentCreated("${path}", (event) => {
                            let sourceID = event.params.${Function.entitySetID(incoming.source)};
                            let targetID = event.params.${Function.entitySetID(incoming.target)};
            
                            let ref = doc(db, "Relationship/${incoming.identifier}/Source", sourceID);
                            return updateDoc(ref, {targetIDs: arrayUnion(targetID)});
                        })
                        `
                    )
                },
                delete: (path, incoming) => {
                    return(
                        `
                        exports.delete_${incoming.identifier}_target = onDocumentDeleted("${path}", (event) => {
                            let sourceID = event.params.${Function.entitySetID(incoming.source)};
                            let targetID = event.params.${Function.entitySetID(incoming.target)};
                                
                            let ref = doc(db, "Relationship/${incoming.identifier}/Source", sourceID);
                            return updateDoc(ref, {targetIDs: arrayRemove(targetID)});
                        })
                        `
                    )
                }
            },
            M_Source: {
                
            }
        },
        outgoing: {
            V_Source: {
                create: (path, outgoing) => {
                    return (
                        `
                        exports.create_${outgoing.identifier}_source = onDocumentCreated("${path}", (event) => {
                            let sourceID = event.params.${Function.entitySetID(outgoing.source)};
                                    
                            return setDoc(doc(db, "Relationship/${outgoing.identifier}/Source", sourceID), {
                                relationshipID: "${outgoing.identifier}",
                                sourceID: sourceID,
                                targetIDs: []
                            })
                        `
                    )
                },
                delete: (path, outgoing) => {
                    return (
                        `
                        exports.delete_${outgoing.identifier}_source = onDocumentCreated("${path}", (event) => {
                            let sourceID = event.params.${Function.entitySetID(outgoing.source)};
                                    
                            return deleteDoc(doc(db, "Relationship/${outgoing.identifier}/Source", sourceID))
                        `
                    )
                }
            },
            M_Source: {

            }
        }
    },

    Fragmentation: {
        incoming: {
            M_Source: {

            },
            V_Source: {
                create: (path, incoming) => {
                    return (
                        `
                        exports.create_${incoming.source}_fragments_into_${incoming.target}_target = onDocumentCreate("${path}", (event) => {
                        let sourceID = event.data.data().parent_${incoming.source}_id;
                        let targetID = event.params.${Function.entitySetID(incoming.target)};
                        
                        let ref = doc(db, "Fragmentation/${incoming.source}_fragments_into_${incoming.target}/Parent", sourceID);
                        return updateDoc(ref, {targetIDs: arrayUnion(targetID)})
                        })
                        `
                    )
                },
                delete: (path, incoming) => {
                    return (
                                `
                        exports.delete_${incoming.source}_fragments_into_${incoming.target}_target = onDocumentCreate("${path}", (event) => {
                        let targetID = event.params.${Function.entitySetID(incoming.target)};
                        
                        let ref = collection(db, "Fragmentation/${incoming.source}_fragments_into_${incoming.target}/Parent");
                        let queryRef = query(ref, where("targetIDs", "array_contains", targetID))
                        
                        let ids = [];
                        let docs = await getDocs(queryRef);
                        docs.forEach(d => ids.push(d.id));
                        
                        if(ids.length > 0){
                            return updateDoc(doc(db, "Fragmentation/${incoming.source}_fragments_into_${incoming.target}/Parent", ids[0]), {targetIDs: arrayRemove(targetID)})
                        }
                        })
                        `
                    )
                }
            }
        },
        outgoing: {
            V_Target: {
                create: (path, outgoing) => {
                    return (
                        `
                        exports.create_${outgoing.source}_fragments_into_${outgoing.target}_source = onDocumentCreated("${path}", (event) => {
                        let sourceID = event.params.${Function.entitySetID(outgoing.source)};
                                
                        return setDoc(doc(db, "Fragmentation/${outgoing.source}_fragments_into_${outgoing.target}/Parent", sourceID), {
                            parentID: sourceID,
                            targetIDs: []
                        })
                        })
                        `
                    )
                },
                outgoing: (path, outgoing) => {
                    return (
                        `
                        exports.delete_${outgoing.source}_fragments_into_${outgoing.target}_source = onDocumentCreated("${path}", (event) => {
                        let sourceID = event.params.${Function.entitySetID(outgoing.source)};
                                
                        return deleteDoc(doc(db, "Fragmentation/${outgoing.source}_fragments_into_${outgoing.target}/Parent", sourceID))
                        })
                        `
                    )
                },
                update: (path, outgoing) => {
                    return (
                        `
                        exports.update_${outgoing.source}_fragments_into_${outgoing.target}_source = onDocumentCreated("${path}", (event) => {
                        let sourceID = event.params.${Function.entitySetID(outgoing.source)};
                                            
                        let parentRef = doc(db, "Fragmentation/${outgoing.source}_fragments_into_${outgoing.target}/Parent", sourceID));
                        let targetIDs = (await getDoc(parentRef)).data().targetIDs;
                        
                        let targets
                        })
                        `    
                    )
                }
            },
            M_Target: {

            }
        }
    }
}

export default Templates;