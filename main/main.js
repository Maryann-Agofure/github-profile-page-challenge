{
    "Authorization": "Bearer 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"
}
query GetProfile {
    repository('owner':"ann", "name": "noo"){
       profilePicture,
       description= {
           "name": "hk",
       } ,

    }
}