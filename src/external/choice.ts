import * as charmd from "https://deno.land/x/charmd@v0.0.1/mod.ts";
import {
	Checkbox,
	Confirm,
	Input,
	Number,
	prompt,
} from "https://deno.land/x/cliffy@v0.24.2/prompt/mod.ts";
import { Octokit } from "https://esm.sh/@octokit/rest";

export type LanguagesAvailable = {
	code: string,
	name: string,
	repositoryUrl: string
}[];

//export type RepoMetadata = 

//  