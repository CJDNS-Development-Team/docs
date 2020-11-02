initSidebarItems({"constant":[["LINK_STATE_SLOTS","Samples are collected every 10 seconds, normally messages are submitted to the Route Server every minute, resulting in 6 samples. But we would store 3 times more samples so that if there is some reason it is unable to submit a message to the route server for up to 3 minutes, still no link state samples will be lost."]],"enum":[["Entity","Announcement message entity types."]],"struct":[["AnnHash","512-bit hash"],["Announcement","Deserialized cjdns route announcement message."],["AnnouncementHeader","Deserialized announcement message header."],["AnnouncementPacket","Serialized announcement message. A thin wrapper over announcement packet bytes."],["LinkStateData",""],["PeerData",""]],"type":[["AnnouncementEntities","A sequence of entities in the announcement message."],["LinkStateSlots","An array of slots storing network link samples."]]});