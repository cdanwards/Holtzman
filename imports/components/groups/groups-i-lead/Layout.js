// @flow

import { MiniCard } from "../../@primitives/UI/cards";
import inAppLink from "../../../util/inAppLink";
import type { IGroup } from "./";

export default ({
  groups,
  loading = false,
  loginParam,
}: {
  groups: IGroup[],
  loading: boolean,
  loginParam: ?string
}) => loading || !groups || !groups.length ? null : (
  <div
    className="soft-half-sides soft-half-top soft-double-top@lap-and-up soft-bottom soft-double-bottom@lap-and-up"
  >
    <h3 className="push-ends text-center">
      Groups You Lead
    </h3>

    <div className="" style={{maxWidth: "480px", margin: "0 auto"}}>
      {groups && groups.length && groups.map(g => (
        <MiniCard
          title={g.name}
          link={`/groups/${g.id}`}
          image={g.photo}
          key={g.id}
        />
      ))}
    </div>

    {/*
    <div className="one-whole text-center">
      <a
        href={`//rock.newspring.cc/groups/leader?${loginParam ? loginParam : ""}`}
        className="btn--dark-tertiary push-half-top push-half-bottom push-bottom@lap-and-up"
        onClick={inAppLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Manage Groups
      </a>
    </div>
    */}
  </div>
);
