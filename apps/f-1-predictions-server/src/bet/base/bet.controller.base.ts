/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BetService } from "../bet.service";
import { BetCreateInput } from "./BetCreateInput";
import { Bet } from "./Bet";
import { BetFindManyArgs } from "./BetFindManyArgs";
import { BetWhereUniqueInput } from "./BetWhereUniqueInput";
import { BetUpdateInput } from "./BetUpdateInput";

export class BetControllerBase {
  constructor(protected readonly service: BetService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bet })
  async createBet(@common.Body() data: BetCreateInput): Promise<Bet> {
    return await this.service.createBet({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,

        race: data.race
          ? {
              connect: data.race,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,
        prediction: true,

        user: {
          select: {
            id: true,
          },
        },

        race: {
          select: {
            id: true,
          },
        },

        userReference: true,
        raceReference: true,
        predictionDetails: true,
        userRelation: true,
        raceRelation: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Bet] })
  @ApiNestedQuery(BetFindManyArgs)
  async bets(@common.Req() request: Request): Promise<Bet[]> {
    const args = plainToClass(BetFindManyArgs, request.query);
    return this.service.bets({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,
        prediction: true,

        user: {
          select: {
            id: true,
          },
        },

        race: {
          select: {
            id: true,
          },
        },

        userReference: true,
        raceReference: true,
        predictionDetails: true,
        userRelation: true,
        raceRelation: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async bet(@common.Param() params: BetWhereUniqueInput): Promise<Bet | null> {
    const result = await this.service.bet({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,
        prediction: true,

        user: {
          select: {
            id: true,
          },
        },

        race: {
          select: {
            id: true,
          },
        },

        userReference: true,
        raceReference: true,
        predictionDetails: true,
        userRelation: true,
        raceRelation: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Bet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBet(
    @common.Param() params: BetWhereUniqueInput,
    @common.Body() data: BetUpdateInput
  ): Promise<Bet | null> {
    try {
      return await this.service.updateBet({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,

          race: data.race
            ? {
                connect: data.race,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          amount: true,
          prediction: true,

          user: {
            select: {
              id: true,
            },
          },

          race: {
            select: {
              id: true,
            },
          },

          userReference: true,
          raceReference: true,
          predictionDetails: true,
          userRelation: true,
          raceRelation: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Bet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBet(
    @common.Param() params: BetWhereUniqueInput
  ): Promise<Bet | null> {
    try {
      return await this.service.deleteBet({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          amount: true,
          prediction: true,

          user: {
            select: {
              id: true,
            },
          },

          race: {
            select: {
              id: true,
            },
          },

          userReference: true,
          raceReference: true,
          predictionDetails: true,
          userRelation: true,
          raceRelation: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
