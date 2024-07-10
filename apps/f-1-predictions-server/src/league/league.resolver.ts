import * as graphql from "@nestjs/graphql";
import { LeagueResolverBase } from "./base/league.resolver.base";
import { League } from "./base/League";
import { LeagueService } from "./league.service";

@graphql.Resolver(() => League)
export class LeagueResolver extends LeagueResolverBase {
  constructor(protected readonly service: LeagueService) {
    super(service);
  }
}
