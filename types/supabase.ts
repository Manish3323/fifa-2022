/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/Events": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Events.id"];
          home?: parameters["rowFilter.Events.home"];
          away?: parameters["rowFilter.Events.away"];
          commence_time?: parameters["rowFilter.Events.commence_time"];
          status?: parameters["rowFilter.Events.status"];
          bookmaker?: parameters["rowFilter.Events.bookmaker"];
          last_update?: parameters["rowFilter.Events.last_update"];
          odd_1?: parameters["rowFilter.Events.odd_1"];
          odd_2?: parameters["rowFilter.Events.odd_2"];
          odd_draw?: parameters["rowFilter.Events.odd_draw"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["Events"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** Events */
          Events?: definitions["Events"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Events.id"];
          home?: parameters["rowFilter.Events.home"];
          away?: parameters["rowFilter.Events.away"];
          commence_time?: parameters["rowFilter.Events.commence_time"];
          status?: parameters["rowFilter.Events.status"];
          bookmaker?: parameters["rowFilter.Events.bookmaker"];
          last_update?: parameters["rowFilter.Events.last_update"];
          odd_1?: parameters["rowFilter.Events.odd_1"];
          odd_2?: parameters["rowFilter.Events.odd_2"];
          odd_draw?: parameters["rowFilter.Events.odd_draw"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Events.id"];
          home?: parameters["rowFilter.Events.home"];
          away?: parameters["rowFilter.Events.away"];
          commence_time?: parameters["rowFilter.Events.commence_time"];
          status?: parameters["rowFilter.Events.status"];
          bookmaker?: parameters["rowFilter.Events.bookmaker"];
          last_update?: parameters["rowFilter.Events.last_update"];
          odd_1?: parameters["rowFilter.Events.odd_1"];
          odd_2?: parameters["rowFilter.Events.odd_2"];
          odd_draw?: parameters["rowFilter.Events.odd_draw"];
        };
        body: {
          /** Events */
          Events?: definitions["Events"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/Groups": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Groups.id"];
          created_at?: parameters["rowFilter.Groups.created_at"];
          name?: parameters["rowFilter.Groups.name"];
          members?: parameters["rowFilter.Groups.members"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["Groups"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** Groups */
          Groups?: definitions["Groups"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Groups.id"];
          created_at?: parameters["rowFilter.Groups.created_at"];
          name?: parameters["rowFilter.Groups.name"];
          members?: parameters["rowFilter.Groups.members"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Groups.id"];
          created_at?: parameters["rowFilter.Groups.created_at"];
          name?: parameters["rowFilter.Groups.name"];
          members?: parameters["rowFilter.Groups.members"];
        };
        body: {
          /** Groups */
          Groups?: definitions["Groups"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/Users": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Users.id"];
          created_at?: parameters["rowFilter.Users.created_at"];
          name?: parameters["rowFilter.Users.name"];
          current_score?: parameters["rowFilter.Users.current_score"];
          email?: parameters["rowFilter.Users.email"];
          groupIds?: parameters["rowFilter.Users.groupIds"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["Users"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** Users */
          Users?: definitions["Users"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Users.id"];
          created_at?: parameters["rowFilter.Users.created_at"];
          name?: parameters["rowFilter.Users.name"];
          current_score?: parameters["rowFilter.Users.current_score"];
          email?: parameters["rowFilter.Users.email"];
          groupIds?: parameters["rowFilter.Users.groupIds"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Users.id"];
          created_at?: parameters["rowFilter.Users.created_at"];
          name?: parameters["rowFilter.Users.name"];
          current_score?: parameters["rowFilter.Users.current_score"];
          email?: parameters["rowFilter.Users.email"];
          groupIds?: parameters["rowFilter.Users.groupIds"];
        };
        body: {
          /** Users */
          Users?: definitions["Users"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/Votes": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Votes.id"];
          created_at?: parameters["rowFilter.Votes.created_at"];
          vote?: parameters["rowFilter.Votes.vote"];
          userId?: parameters["rowFilter.Votes.userId"];
          matchId?: parameters["rowFilter.Votes.matchId"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["Votes"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** Votes */
          Votes?: definitions["Votes"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Votes.id"];
          created_at?: parameters["rowFilter.Votes.created_at"];
          vote?: parameters["rowFilter.Votes.vote"];
          userId?: parameters["rowFilter.Votes.userId"];
          matchId?: parameters["rowFilter.Votes.matchId"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Votes.id"];
          created_at?: parameters["rowFilter.Votes.created_at"];
          vote?: parameters["rowFilter.Votes.vote"];
          userId?: parameters["rowFilter.Votes.userId"];
          matchId?: parameters["rowFilter.Votes.matchId"];
        };
        body: {
          /** Votes */
          Votes?: definitions["Votes"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  Events: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: text */
    home?: string;
    /** Format: text */
    away?: string;
    /** Format: text */
    commence_time?: string;
    /** Format: text */
    status?: string;
    /** Format: text */
    bookmaker?: string;
    /** Format: text */
    last_update?: string;
    /** Format: double precision */
    odd_1?: number;
    /** Format: double precision */
    odd_2?: number;
    /** Format: double precision */
    odd_draw?: number;
  };
  Groups: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    name?: string;
    /** Format: ARRAY */
    members: unknown[];
  };
  Users: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    name?: string;
    /** Format: bigint */
    current_score: number;
    /** Format: text */
    email?: string;
    /** Format: ARRAY */
    groupIds?: unknown[];
  };
  Votes: {
    /** Format: bigint */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    vote?: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `Users.id`.<fk table='Users' column='id'/>
     */
    userId: number;
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `Events.id`.<fk table='Events' column='id'/>
     */
    matchId: number;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description Events */
  "body.Events": definitions["Events"];
  /** Format: bigint */
  "rowFilter.Events.id": string;
  /** Format: text */
  "rowFilter.Events.home": string;
  /** Format: text */
  "rowFilter.Events.away": string;
  /** Format: text */
  "rowFilter.Events.commence_time": string;
  /** Format: text */
  "rowFilter.Events.status": string;
  /** Format: text */
  "rowFilter.Events.bookmaker": string;
  /** Format: text */
  "rowFilter.Events.last_update": string;
  /** Format: double precision */
  "rowFilter.Events.odd_1": string;
  /** Format: double precision */
  "rowFilter.Events.odd_2": string;
  /** Format: double precision */
  "rowFilter.Events.odd_draw": string;
  /** @description Groups */
  "body.Groups": definitions["Groups"];
  /** Format: bigint */
  "rowFilter.Groups.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.Groups.created_at": string;
  /** Format: text */
  "rowFilter.Groups.name": string;
  /** Format: ARRAY */
  "rowFilter.Groups.members": string;
  /** @description Users */
  "body.Users": definitions["Users"];
  /** Format: bigint */
  "rowFilter.Users.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.Users.created_at": string;
  /** Format: text */
  "rowFilter.Users.name": string;
  /** Format: bigint */
  "rowFilter.Users.current_score": string;
  /** Format: text */
  "rowFilter.Users.email": string;
  /** Format: ARRAY */
  "rowFilter.Users.groupIds": string;
  /** @description Votes */
  "body.Votes": definitions["Votes"];
  /** Format: bigint */
  "rowFilter.Votes.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.Votes.created_at": string;
  /** Format: text */
  "rowFilter.Votes.vote": string;
  /** Format: bigint */
  "rowFilter.Votes.userId": string;
  /** Format: bigint */
  "rowFilter.Votes.matchId": string;
}

export interface operations {}

export interface external {}
