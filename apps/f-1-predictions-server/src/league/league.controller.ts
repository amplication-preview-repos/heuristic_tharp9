import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeagueService } from "./league.service";
import { LeagueControllerBase } from "./base/league.controller.base";

@swagger.ApiTags("leagues")
@common.Controller("leagues")
export class LeagueController extends LeagueControllerBase {
  constructor(protected readonly service: LeagueService) {
    super(service);
  }
}
